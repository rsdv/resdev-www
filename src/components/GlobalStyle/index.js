import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: ${props => props.theme.main.typography["body-font"]};
    font-size: ${props => props.theme.main.typography["font-size"]};
    line-height: ${props => props.theme.main.typography["line-height"]};
    font-weight: ${props => props.theme.main.typography.fontWeights.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  // button, select {
  //   text-transform: none;
  // }
  //
  // button, input {
  //   overflow: visible;
  // }
  //
  // button, input, optgroup, select, textarea {
  //   font-family: inherit;
  //   font-size: 100%;
  //   line-height: 1.15;
  //   margin: 0;
  // }
  //
  a, a:hover {
    color: inherit;
    background-color: transparent;
    text-decoration: none;
  }
  
  
  ${props => Object.keys(props.theme.main.sizes.breakpoints).map((bp) => css`
    .container-${bp} {
      max-width: ${props.theme.main.sizes.containers[bp]};
      margin-right: auto;
      margin-left: auto;
    }
  `)}
`

export default GlobalStyle
