import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: ${props => props.theme.main.sizes.spacing['space-2']};
  
  &:last-child {
    padding-bottom: 0;
  }
`

const Label = styled.span`
  line-height: ${props => props.theme.main.typography.lineHeights.condensed};
  padding-left: ${props => props.theme.main.sizes.spacing['space-2']};
  font-weight: ${props => props.theme.main.typography.fontWeights.bold};
  color: ${props => props.theme.main.colors.text.gray};
`

export { Content, Label }
