import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Layout } from '../Layout/Layout'
import GlobalStyle from '../src/GlobalStyles'
import { wrapper } from '../src/redux/store/store'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default wrapper.withRedux(MyApp)
