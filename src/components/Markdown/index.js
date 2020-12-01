import styled from 'styled-components'

// Just overwrite any default styles in here, mostly here for links and
// subscripts/superscripts
const Markdown = styled.div`
  p {
    margin: 0;
    padding-bottom: 8px;
  }
  
  p:last-child {
    padding-bottom: 0px;
  }
`

export default Markdown
