import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getSearchResults } from '../../src/apiCalls/apiCalls'
import { Header } from '../../src/components/Header/Header'
import { ResultDescription } from '../../src/components/ResultDescription/ResultDescription'

interface SearchResultProps {
  searchInformation: {
    formattedTotalResults: string
    searchTime: string
  }
  items: Array<{
    title: string
    link: string
    snippet: string
  }>
}

const SearchResult: NextPage<{ response: SearchResultProps }> = ({
  response,
}) => {
  const [results, setResults] = useState<SearchResultProps>()
  const router = useRouter()

  useEffect(() => {
    setResults(response)
  }, [response])

  return (
    <Container>
      <Head>
        <title>- Google</title>
      </Head>
      <Header />
      <Wrap>
        <ResutsDetails>
          Результатов: примерно{' '}
          {results?.searchInformation?.formattedTotalResults} (
          {results?.searchInformation?.searchTime} сек.)
        </ResutsDetails>
        {results?.items?.map((item) => (
          <ResultDescription
            key={item.link}
            site={item.link}
            title={item.title}
            description={item.snippet}
          />
        ))}
      </Wrap>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchTerm = context?.params?.search as string
  const response = await getSearchResults(searchTerm)
  return {
    props: {
      response,
    },
  }
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
  gap: 1em;
`

export default SearchResult
