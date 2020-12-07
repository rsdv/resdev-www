import styled from 'styled-components'

const Wrapper = styled.div`
  width: ${props => props.theme.main.sizes.columns['col-8']};
  margin-left: 32px;
  
  @media (min-width: ${props => props.theme.main.sizes.width.sm}) {
    width: ${props => props.theme.main.sizes.columns['col-7']};
  }
`

export default Wrapper
