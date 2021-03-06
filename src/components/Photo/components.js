import styled, { css } from 'styled-components'

// For making the images 100% square
const Wrapper = styled.div`
  width: 100%;
  // For keeping min width the same as height
  padding-top: 100%;
  position: relative;
 
  ${props => props.type === 'fixed-width' ? css`
    height: 100%;
  ` : null}
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: all;
  object-fit: fill;
  border-radius: ${props => props.theme.main.misc.radius.default};
  width: 100%;
  height: 100%;
  box-shadow: ${props => props.theme.main.misc.shadow.large};
`

export { Wrapper, Image }
