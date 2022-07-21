import type { AppProps } from 'next/app'
import { Layout } from '../Layout/Layout'
import GlobalStyle from '../src/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
