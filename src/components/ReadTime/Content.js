import styled from 'styled-components'

const Content = styled.span`
  &:after {
    content: attr(title);
  }
`

export default Content
