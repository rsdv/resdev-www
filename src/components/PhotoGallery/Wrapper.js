import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  
  // Remove these
  width: ${props => props.theme.main.sizes.columns['col-4']};
  padding: 64px 0px 0px 16px;
`

export default Wrapper
