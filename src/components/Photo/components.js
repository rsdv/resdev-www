import styled from 'styled-components'

// For making the images 100% square
const Wrapper = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: all;
  object-fit: fill;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  box-shadow: -1px 0px 4px rgba(0,0,0,0.2);
  
  // Make it look like it's selected
  // Flatten it out and slightly opace-it
  &.selected {
    opacity: 0.5;
    border: 0.5px solid #979797;
    box-shadow: initial !important;
  }
`

export { Wrapper, Image }
