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
  font-family: ${props => props.theme.main.typography["body-font"]};
  cursor: text;
  
  img {
    display: block;
    margin: ${props => props.theme.main.sizes.spacing['space-5']} auto;
    border-radius: ${props => props.theme.main.misc.radius.default};
    box-shadow: ${props => props.theme.main.misc.shadow["extra-large"]};
    
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
  ` : null}
  
`

export default Wrapper
