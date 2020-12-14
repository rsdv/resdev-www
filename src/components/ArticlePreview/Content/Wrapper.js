import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  text-align: left;
  line-height: 20px;
  min-width: 0px;
  
  ${props => props.margin ? css`
    @media (min-width: ${props => props.theme.main.sizes.breakpoints.md}) {
      margin-right: 24px;
    }
  ` : null}
`

export default Wrapper
