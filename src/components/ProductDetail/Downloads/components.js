import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 8px;
  
  &:last-child {
    padding-bottom: 0;
  }
`

const Label = styled.span`
  line-height: 40px;
  padding-left: 8px;
  font-size: 12px;
  font-weight: ${props => props.theme.main.fontWeights.bold};
  color: ${props => props.theme.main.colors.text.primary};
`

export { Content, Label }
