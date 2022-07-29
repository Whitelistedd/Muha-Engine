import styled from 'styled-components'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Location>Россия</Location>
    </Container>
  )
}

const Location = styled.div``

const Container = styled.div`
  color: grey;
  height: 45px;
  background-color: ${({ theme }) => theme.background};
  padding: 1em;
  display: flex;
`
