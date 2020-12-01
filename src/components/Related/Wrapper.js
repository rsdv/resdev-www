import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  
  .related-title {
    padding-top: 6px;
    font-size: 12px;
    font-weight: ${props => props.theme.main.fontWeights.bold};
    color: ${props => props.theme.main.colors.text.primary};
  }
`

export default Wrapper
