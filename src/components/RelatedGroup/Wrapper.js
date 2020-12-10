import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  order: 5;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
  
  & > div {
    margin: 8px 4px;
  }
`

export default Wrapper
