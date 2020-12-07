/**
 * Temp page, might get split like products is
 * */

import styled from 'styled-components'

const Content = styled.div`
  width: ${props => props.theme.main.sizes.columns['col-8']};
  padding-right: 32px;
  
  // @media (min-width: ${props => props.theme.main.sizes.width.sm}) {
  //   width: ${props => props.theme.main.sizes.columns['col-7']};
  // }
`

const Sidebar = styled.div`
  width: ${props => props.theme.main.sizes.columns['col-4']};
  
  // @media (min-width: ${props => props.theme.main.sizes.width.sm}) {
  //   width: ${props => props.theme.main.sizes.columns['col-5']};
  // }
`

export { Content, Sidebar }
