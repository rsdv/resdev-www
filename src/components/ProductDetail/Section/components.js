import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
`

const Title = styled.h2`
  margin: 16px 0px 0px 0px;
  font-size: ${props => props.theme.main.typography.headers.h2}
  font-weight: ${props => props.theme.main.typography.fontWeights.black};
  color: ${props => props.theme.main.colors.text.gray};
`

const Content = styled.div`
  padding: ${props => props.theme.main.sizes.spacing['space-2']};
  display: flex;
`

export { Wrapper, Title, Content }
