/**
 * Temp page, might get split like products is
 * */

import styled from 'styled-components'

const Content = styled.div`
  min-width: ${props => props.theme.main.sizes.columns['col-8']};
  
  @media (min-width: ${props => props.theme.main.sizes.breakpoints.md}) {
    padding-right: 32px;
  }
`

const Sidebar = styled.div`
  max-width: ${props => props.theme.main.sizes.columns['col-4']};
  display: none;
  
  @media (min-width: ${props => props.theme.main.sizes.breakpoints.md}) {
    display: block;
  }
`

export { Content, Sidebar }
