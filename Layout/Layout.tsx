import styled, { ThemeProvider } from 'styled-components'
import { Footer } from '../src/components/Footer/Footer'
import { useAppSelector } from '../src/redux/store/store'
import { theme, themeType } from '../src/themes'

export const Layout: React.FC<any> = ({ children }) => {
  const { ChosenTheme } = useAppSelector((state) => state.user)

  return (
    <Container>
      <ThemeProvider theme={theme[ChosenTheme as keyof themeType]}>
        {children}
        <Footer />
      </ThemeProvider>
    </Container>
  )
}

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
`
