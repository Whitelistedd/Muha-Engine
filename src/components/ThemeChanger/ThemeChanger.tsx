/* eslint-disable react/display-name */
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { setTheme } from '../../redux/slices/user'
import { AppDispatch, useAppSelector } from '../../redux/store/store'

export const ThemeChanger: React.FC = () => {
  const { ChosenTheme } = useAppSelector((state) => state.user)
  const dispatch = AppDispatch()

  const toggleTheme = () => {
    dispatch(setTheme(ChosenTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <StyledImage
        alt="pfp"
        width={30}
        height={30}
        src={'/assets/images/sun.svg'}
        onClick={() => toggleTheme()}
      />
      <StyledImage
        alt="pfp"
        width={30}
        height={30}
        onClick={() => toggleTheme()}
        src={'/assets/images/moon.svg'}
      />
    </>
  )
}

const StyledImage = styled(Image)`
  border-radius: 50%;
`
