import styled from 'styled-components'

// Probably a better way
const Group = styled.div`
  display: flex;
  
  > div {
    margin-right: 16px;
  }
  
  > div:last-child {
    margin-right: 0;
  }
`

export { Group }
