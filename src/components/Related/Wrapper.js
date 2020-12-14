import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
  
  .related-title {
    padding-top: ${props => props.theme.main.sizes.spacing['space-1']};
    // font-size: 12px;
    font-weight: ${props => props.theme.main.typography.fontWeights.bold};
    color: ${props => props.theme.main.colors.text.gray};
  }
`

export default Wrapper
