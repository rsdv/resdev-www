import styled from 'styled-components';

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

// Shared css
const Button = styled.button`
  font-size: 20px;
  font-weight: ${props => props.theme.main.fontWeights.bold};
  padding: 4px;
  margin-right: 32px;
  width: 170px;
  border-radius: 4px;
  border: 0px;
  box-shadow: -1px 0px 4px rgba(0,0,0,0.2);
`

const HomeButton = styled(Button)`
  background-color: ${props => props.theme.main.colors.resdev.red};
  color: #FFF;
`

const GoBackButton = styled(Button)`
  background-color: #FFF;
  color: ${props => props.theme.main.colors.resdev.red};
  border: 1px solid ${props => props.theme.main.colors.resdev.red};
`

export { Title, HomeButton, GoBackButton, ButtonGroup }
