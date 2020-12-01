import styled from 'styled-components'

const Group = styled.div`
  display: flex;
  
  > div {
    margin-right: 8px;
  }
  
  > div:last-child {
    margin-right: 0;
  }
`

export { Group }
