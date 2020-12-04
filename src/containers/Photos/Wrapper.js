import styled from 'styled-components'

const Wrapper = styled.div`
  width: ${props => props.theme.main.sizes.columns['col-4']};
  
  @media (min-width: ${props => props.theme.main.sizes.width.sm}) {
    width: ${props => props.theme.main.sizes.columns['col-5']};
  }
`

export default Wrapper
