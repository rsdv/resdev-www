import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  
  // Clean this up
  @media (min-width: ${props => props.theme.main.sizes.width.sm}) {
    justify-content: flex-start;
  }
`

export default ButtonGroup
