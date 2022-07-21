import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'

export const SearchBar: React.FC = ({ className }: { className?: string }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    router.push(`/search/${searchTerm}`)
  }

  return (
    <Container className={className}>
      <SearchIcon onClick={() => handleSearch()}>
        <Image
          layout="responsive"
          width={20}
          height={20}
          alt="SearchIcon"
          src={'/assets/images/search.svg'}
        />
      </SearchIcon>
      <SearchInput
        onKeyDown={(e) => {
          e.key === 'Enter' && handleSearch()
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SideIcon>
        <Image
          layout="responsive"
          width={20}
          height={20}
          alt="SearchIcon"
          src={'/assets/images/keyboard.svg'}
        />
      </SideIcon>
      <SideIcon>
        <Image
          layout="responsive"
          width={20}
          height={20}
          alt="SearchIcon"
          src={'/assets/images/microphone.svg'}
        />
      </SideIcon>
    </Container>
  )
}

const SideIcon = styled.div`
  width: 25px;
`

const SearchIcon = styled.div`
  width: 18px;
`

const SearchInput = styled.input`
  border: 0px;
  width: 100%;
  color: black;
  &:focus {
    outline: none;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
  gap: 0.5em;
  width: 100%;
  max-width: 600px;
  height: 44px;
  border: 1px solid #dee1e4;
  border-radius: 25px;
  margin-bottom: 200px;
  transition: 200ms ease;

  &:hover {
    box-shadow: 0px 0px 5px #00000096;
  }
`
