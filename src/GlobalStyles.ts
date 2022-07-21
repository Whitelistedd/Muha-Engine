import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,body {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: roboto;
  }

  h1,h2,h3,h4,h5,h6,li,ul,p {
    margin: 0px;
    padding: 0px;
  }

  * , *:before, *:after {
    box-sizing: border-box;
  }
`

export default GlobalStyle
