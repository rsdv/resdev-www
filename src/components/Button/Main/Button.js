import styled, { css } from 'styled-components'

import SharedButton from '../Shared'

const Button = styled(SharedButton)`
  ${props => props.inverse ? css`
    background-color: #FFF;
    color: ${props => props.theme.main.colors.resdev.red};
    border: 1px solid ${props => props.theme.main.colors.resdev.red};
  ` : css`
    background-color: ${props => props.theme.main.colors.resdev.red};
    color: #FFF;
  `}
`

export default Button
