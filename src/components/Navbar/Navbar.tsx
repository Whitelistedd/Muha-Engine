import styled from 'styled-components'
import { ThemeChanger } from '../ThemeChanger/ThemeChanger'

export const Navbar: React.FC = () => {
  return (
    <Container>
      <NavbarList>
        <NavbarListItem>
          <ThemeChanger />
        </NavbarListItem>
      </NavbarList>
    </Container>
  )
}

const NavbarListItem = styled.li``

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
  align-items: center;
`

const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 1em;
  display: flex;
  justify-content: flex-end;
`
