import styled from 'styled-components'
import { Logo } from '../../Logo/Logo'
import { ThemeChanger } from '../../ThemeChanger/ThemeChanger'
import { SearchBar } from '../../SearchBar/SearchBar'

export const Header: React.FC = () => {
  return (
    <Container>
      <StyledLogo />
      <StyledSearchBar />
      <ThemeChanger />
    </Container>
  )
}

const StyledSearchBar = styled(SearchBar)`
  margin-bottom: 0px;
  margin-right: auto;
`

const StyledLogo = styled(Logo)`
  width: 100px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  gap: 2em;
  padding: 2.5em;

  @media only screen and (max-width: 610px) {
    padding: 0.5em;
  }
`
