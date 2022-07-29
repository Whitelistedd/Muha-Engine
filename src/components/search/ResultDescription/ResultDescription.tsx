import styled from 'styled-components'
import { ResultDescriptionProps } from './ResultDescription.model'
import Link from 'next/link'

export const ResultDescription: React.FC<ResultDescriptionProps> = ({
  site,
  title,
  description,
}) => {
  return (
    <Container href={site}>
      <Wrap>
        <Website>{site}</Website>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrap>
    </Container>
  )
}

const Description = styled.p`
  font-size: 0.9em;
  color: ${({ theme }) => theme.secondaryFontColor};
`

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryFontColor};
  font-size: 1.3em;
`

const Website = styled.p`
  font-size: 0.9em;
  color: ${({ theme }) => theme.secondaryFontColor};
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 50%;
  font-family: 'Open Sans', roboto;
  &:hover {
    cursor: pointer;
    ${Title} {
      text-decoration: underline;
    }
  }
`

const Container = styled(Link)``
