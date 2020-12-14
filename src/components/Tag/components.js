import styled from 'styled-components'

const Wrapper = styled.div`
  // width: ${props => props.theme.main.sizes.columns['col-1']};
  min-width: 100px;
  padding: 2px 16px 2px 16px;
  margin-right: 16px;
  border-radius: 4px;
  background-color: #E4E4E4;
  text-align: center;
  color: ${props => props.theme.main.colors.text.gray};
  font-size: 12px;
  font-weight: ${props => props.theme.main.typography.fontWeights.semiBold};
  box-shadow: ${props => props.theme.main.misc.shadow.medium};
`

export { Wrapper }
