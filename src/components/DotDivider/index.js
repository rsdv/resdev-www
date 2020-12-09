import styled from 'styled-components'

const DotDivider = styled.span`
  padding: 0px 4px;
  
  &:after {
    content: '\\00B7';
  }
`

export default DotDivider
