import styled from 'styled-components'

const Title = styled.h1`
  // Overwrite the one set in sanitize.css
  margin: 16px 0px 0px 0px;
  font-size: 36px;
  font-weight: ${props => props.theme.main.fontWeights.black};
  color: ${props => props.theme.main.colors.text.primary};
  
  // If no tags set this to the top
  div > &:first-child {
    margin: 0;
  }
`

const Description = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: ${props => props.theme.main.colors.text.primary};
`

export { Title, Description }
