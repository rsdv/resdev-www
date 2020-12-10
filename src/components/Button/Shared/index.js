import styled from "styled-components";

const Button = styled.button`
  font-size: 16px;
  font-weight: ${props => props.theme.main.fontWeights.bold};
  padding: 4px;
  margin-right: 32px;
  width: 170px;
  border-radius: 4px;
  border: 0px;
  box-shadow: -1px 0px 4px rgba(0,0,0,0.2);
  
  // Have the content stay to the left when off mobile sizes
  @media (min-width: ${props => props.theme.main.sizes.width.sm}) {
    justify-content: flex-start;
    font-size: 20px;
  }
`

export default Button
