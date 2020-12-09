/**
 *
 * Markdown.js
 *
 * Todo:
 *
 * */
import styled, { css } from 'styled-components'

// Just overwrite any default styles in here, mostly here for links and
// subscripts/superscripts
const Wrapper = styled.article`
  font-family: 'Lato'!important;
  
  img {
    display: block;
    margin: 32px auto;
    border-radius: 4px;
    // width: 100%;
    // height: 100%;
    box-shadow: -1px 0px 4px rgba(0,0,0,0.2);
    
    transition: opacity 400ms ease 0ms;
  }
  
  ${props => props.inline ? css`
    p {
      margin: 0;
      padding-bottom: 8px;
    }
    
    p:last-child {
      padding-bottom: 0px;
    }
  ` : null }
  
`

export default Wrapper
