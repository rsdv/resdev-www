import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Lato';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  button, select {
    text-transform: none;
  }
  
  button, input {
    overflow: visible;
  }
  
  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  
  a {
    background-color: transparent;
  }
  
  li {
    border-bottom: solid 0.5px rgba(155,155,155,0.4);
    font-size: 12px;
    font-weight: 500;
    padding: 8px 0px 2px 0px;
    div {
      height: 21px;
    }
  }
  
  ul {
    padding: 8px 0px 8px 0px;
  }
  
`

export default GlobalStyle;
