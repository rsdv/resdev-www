import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
`

const Title = styled.h2`
  margin: 16px 0px 0px 0px;
  font-size: 24px;
  font-weight: ${props => props.theme.main.fontWeights.black};
  color: ${props => props.theme.main.colors.text.primary};
`

const Content = styled.div`
  padding: 8px;
  display: flex;
`

export { Wrapper, Title, Content }
