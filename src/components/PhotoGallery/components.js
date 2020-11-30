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
`

export { Grid, Main, Selector }
