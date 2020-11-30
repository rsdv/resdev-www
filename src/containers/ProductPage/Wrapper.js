import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 64px 0px 64px;
  width: ${props => props.theme.main.sizes.width.md};
  
  @media (min-width: ${props => props.theme.main.sizes.width.lg}) {
    width: 1012px;
  }
`

export default Wrapper
