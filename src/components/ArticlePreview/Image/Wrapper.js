import styled from 'styled-components'

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  flex: 0 0 auto;
  
  @media (min-width: ${props => props.theme.main.sizes.breakpoints.md}) {
    width: 152px;
  }
`

export default Wrapper
