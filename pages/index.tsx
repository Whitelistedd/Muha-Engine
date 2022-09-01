import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { Header } from '../src/components/Home/Header/Header'
import { Logo } from '../src/components/Logo/Logo'
import { SearchBar } from '../src/components/SearchBar/SearchBar'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Muha Engine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Wrap>
        <HomeLogo />
        <HomeSearch />
      </Wrap>
    </Container>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2em;
  margin: 10px;
`

const HomeLogo = styled(Logo)``

const HomeSearch = styled(SearchBar)``

const Container = styled.div`
  min-height: calc(100vh - 45px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  box-sizing: border-box;

  @media only screen and (max-width: 650px) {
    ${HomeLogo} {
      width: 60%;
    }
    ${HomeSearch} {
      max-width: 400px;
    }
  }
`

export default Home
