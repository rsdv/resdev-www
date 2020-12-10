/**
 * Usage:
 *
 * styled(H3)`
 *   ...
 * `
 * */

import styled from 'styled-components'

const H3 = styled.h3`
  font-size: 28px;
  font-weight: ${props => props.theme.main.fontWeights.semiBold};
`

export default H3
