/* eslint-disable react/display-name */
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { handleTheme } from '../../redux/slices/user'
import { AppDispatch, useAppSelector } from '../../redux/store/store'

export const ThemeChanger: React.FC = () => {
  const { ChosenTheme } = useAppSelector((state) => state.user)
  const dispatch = AppDispatch()

  const toggleTheme = () => {
    dispatch(handleTheme(ChosenTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <Container onClick={() => toggleTheme()}>
      <Sun SelectedTheme={ChosenTheme}>
        <Image
          src="/assets/images/sun.svg"
          alt="light mode"
          width={23}
          height={23}
        />
      </Sun>
      <Moon SelectedTheme={ChosenTheme}>
        <Image
          src="/assets/images/moon.svg"
          alt="dark mode"
          width={23}
          height={23}
        />
      </Moon>
    </Container>
  )
}

const Sun = styled.div<{ SelectedTheme: string }>`
  position: absolute;
  background-color: ${({ theme }) => theme.secondaryBackground};
  border-radius: 50%;
  left: ${(props) => (props.SelectedTheme === 'light' ? '0px' : '30px')};
  opacity: ${(props) => (props.SelectedTheme === 'light' ? '1' : '0')};
  transition: 500ms ease;
  margin: 0px 2.5px;
  display: flex;
  align-items: center;
`

const Moon = styled(Sun)<{ SelectedTheme: string }>`
  opacity: ${(props) => (props.SelectedTheme === 'dark' ? '1' : '0')};
  left: ${(props) => (props.SelectedTheme === 'dark' ? '30px' : '0px')};
`

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  transition: 500ms ease;
  width: 60px;
  height: 30px;
  border-radius: 50px;
  padding: 0.5em 1em;
  background-color: ${({ theme }) => theme.secondaryBackground};

  &:hover {
    cursor: pointer;
  }
`
