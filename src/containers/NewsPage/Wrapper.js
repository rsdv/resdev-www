import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 64px;
  
  @media (max-width: ${props => props.theme.main.sizes.breakpoints.md}) {
    padding: 0 ${props => props.theme.main.sizes.spacing['space-2']}
  }
`

export default Wrapper
