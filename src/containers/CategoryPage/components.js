import styled, { css } from 'styled-components'

import { H3 } from '../../components/Headers'

const Banner = styled.div`
  width: 100%;
  box-shadow: 0px 2px 3px rgba(0,0,0,.2);
  height: 50vh;
  color: grey;
  margin: 0 0 32px 0;
  
  ${props => !!props.img ? css`
    background-image: url("${props.img}");

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  ` : null }
`

const Content = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 32px;
  
  // Clean this up
  @media (min-width: ${props => props.theme.main.sizes.width.lg}) {
    width: ${props => props.theme.main.sizes.width.lg};
  }
  
  @media (max-width: ${props => props.theme.main.sizes.width.lg}) {
    width: ${props => props.theme.main.sizes.width.md};
  }
  
  @media (max-width: ${props => props.theme.main.sizes.width.md}) {
    width: 100%;
  }
`

const Related = styled.div`
  margin: 64px auto 0px auto;
  max-width: ${props => props.theme.main.sizes.width.md}
`

const RelatedTitle = styled(H3)`
  margin-bottom: 32px;
  text-align: center;
`

export { Banner, Content, Related, RelatedTitle }
