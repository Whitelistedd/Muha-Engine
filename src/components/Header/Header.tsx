import { ThemeChanger } from 'components/ThemeChanger/ThemeChanger'
import styled from 'styled-components'

export const Header: React.FC = () => {
  return (
    <Container>
      <ThemeChanger />
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  padding: 2.5em;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
