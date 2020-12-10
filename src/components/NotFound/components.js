import styled from 'styled-components'

const Title = styled.div`
  width: 400px;
  font-size: 64px;
  color: ${props => props.theme.main.colors.text.primary};
  font-weight: ${props => props.theme.main.fontWeights.black};
  line-height: 1.25;
  
  span {
    color: ${props => props.theme.main.colors.resdev.red};
  }
`

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: flex-start;
`

export { Title, ButtonGroup }
