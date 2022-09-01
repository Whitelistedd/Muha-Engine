/* eslint-disable react/display-name */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

export const Logo: React.FC = React.memo(
  ({ className }: { className?: string }) => {
    return (
      <Container className={className}>
        <Link href="/">
          <Image
            alt="logo"
            layout="responsive"
            width={50}
            height={15}
            src={'/assets/images/Muha-logos.png'}
          />
        </Link>
      </Container>
    )
  }
)

const Container = styled.div`
  font-size: 4.5em;
  font-weight: 700;
  width: 300px;
  max-width: 300px;
  font-family: 'Roboto';

  &:hover {
    cursor: pointer;
  }
`
