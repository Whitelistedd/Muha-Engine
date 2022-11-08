import { useCallback, useRef, useState } from 'react'

import Head from 'next/head'
import { Header } from 'components/search/Header/Header'
import { NextPage } from 'next'
import { ResultDescription } from 'components/search/ResultDescription/ResultDescription'
import { getSearchResults } from 'apiCalls/apiCalls'
import styled from 'styled-components'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

interface InfiniteSearchType {
  queries: {
    nextPage: { startIndex: number }[]
  }
  prevPage: { start: number }
  searchInformation: {
    formattedTotalResults: string
    searchTime: string
  }
  items: {
    title: string
    link: string
    snippet: string
  }[]
}

const SearchResult: NextPage = () => {
  const searchTerm = useRouter().query.search as string
  const [loading, setLoading] = useState(false)

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery<
    InfiniteSearchType,
    Error
  >(['googleResults', searchTerm], getSearchResults, {
    getNextPageParam: (lastPage) =>
      lastPage?.queries?.nextPage?.[0]?.startIndex,
    getPreviousPageParam: (firstPage) => firstPage?.prevPage?.start,
    refetchOnWindowFocus: false,
  })

  const observer = useRef()

  const lastDataElement = useCallback(
    async (node: unknown) => {
      console.log(loading)
      if (loading) return
      if (observer.current) observer.current?.disconnect()
      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          setLoading(true)
          if (hasNextPage) await fetchNextPage()
          setLoading(false)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasNextPage]
  )

  /* useEffect(() => {
    let fetching = false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onScroll = async (event: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true
        if (hasNextPage) await fetchNextPage()
        fetching = false
      }
    }

    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, []) */

  console.log(data)

  return (
    <Container>
      <Head>
        <title>{searchTerm} - Google</title>
      </Head>
      <Header />
      <Wrap>
        <ResutsDetails>
          Результатов: примерно{' '}
          {data?.pages[0]?.searchInformation?.formattedTotalResults} (
          {data?.pages[0]?.searchInformation?.searchTime} сек.)
        </ResutsDetails>
        {data?.pages.map((page) =>
          page?.items?.map((item, index) =>
            page.items.length === index + 1 ? (
              <div ref={lastDataElement}>
                {console.log(item.title)}
                <ResultDescription
                  key={item.link}
                  site={item.link}
                  title={item.title}
                  description={item.snippet}
                />
              </div>
            ) : (
              <ResultDescription
                key={item.link}
                site={item.link}
                title={item.title}
                description={item.snippet}
              />
            )
          )
        )}
      </Wrap>
    </Container>
  )
}

const ResutsDetails = styled.p`
  color: grey;
  font-size: 0.8em;
`

const Wrap = styled.div`
  padding: 0em 0em 2em 10em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  gap: 1em;

  @media only screen and (max-width: 1128px) {
    ${Wrap} {
      padding-left: 5em;
    }
  }
  @media only screen and (max-width: 950px) {
    ${Wrap} {
      padding: 0em 1em;
    }
  }

  @media only screen and (max-width: 550px) {
    ${Wrap} {
      padding: 0em 1em;
      width: 100%;
    }
  }
`

export default SearchResult
