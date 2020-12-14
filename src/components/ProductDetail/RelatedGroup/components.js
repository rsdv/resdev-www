import styled from 'styled-components'

// Probably a better way
const Group = styled.div`
  display: flex;
  
  > div {
    margin-right: ${props => props.theme.main.sizes.spacing['space-3']};
  }
  
  > div:last-child {
    margin-right: 0;
  }
`

export { Group }
