import Link from 'next/link'
import { ResultDescriptionProps } from './ResultDescription.model'
import styled from 'styled-components'

export const ResultDescription: React.FC<ResultDescriptionProps> = ({
  site,
  title,
  ref,
  description,
}) => {
  return (
    <Container href={site}>
      <Wrap ref={ref ? ref : null}>
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
  text-overflow: ellipsis;
  overflow: hidden;
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

  @media only screen and (max-width: 1128px) {
    width: 70%;
  }
  @media only screen and (max-width: 950px) {
    width: 100%;
    background-color: ${({ theme }) => theme.secondaryBackground};
    padding: 1em;
    border-radius: 10px;
    font-size: 13px;
  }
`

const Container = styled(Link)``
