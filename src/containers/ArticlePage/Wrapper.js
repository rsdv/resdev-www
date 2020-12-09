import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  // display: flex;
  margin: 64px auto;
  // padding: 0px 64px;
  width: ${props => props.theme.main.sizes.width.md};
  
  @media (min-width: ${props => props.theme.main.sizes.width.lg}) {
    width: 1012px;
  }
`

export default Wrapper
