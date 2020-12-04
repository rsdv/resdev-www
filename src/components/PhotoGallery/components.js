import styled from 'styled-components'

// TODO: Check responsiveness

const Grid = styled.div`
  display: block;
  width: ${props => props.theme.main.sizes.columns['col-4']};
  
  @media (min-width: ${props => props.theme.main.sizes.width.sm}) {
    width: ${props => props.theme.main.sizes.columns['col-3']};
  }
`

const Main = styled.div`
  width: ${props => props.theme.main.sizes.columns['col-8']};
  
  @media (min-width: ${props => props.theme.main.sizes.width.sm}) {
    width: ${props => props.theme.main.sizes.columns['col-9']};
  }
`

const Selector = styled.div`
  padding: 0px 8px 8px 0px;
  
  @media (min-width: ${props => props.theme.main.sizes.width.sm}) {
    padding: 0px 16px 16px 0px;
  }
  
  & img {
    cursor: pointer;
  }
  
  // Make it look like it's selected
  // Flatten it out and slightly opace-it
  & img.selected {
    cursor: default;
    opacity: 0.5;
    border: 0.5px solid #979797;
    box-shadow: initial !important;
  }
`

export { Grid, Main, Selector }
