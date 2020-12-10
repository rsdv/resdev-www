import styled from 'styled-components'

const Banner = styled.div`
  width: 100%;
  box-shadow: 0px 2px 3px rgba(0,0,0,.2);
  margin-bottom: 32px;
  left: 0;
  right: 0;
  top: 0;
  
  > img {
    height: auto;
    max-width: 100%;
    object-fit: cover;
    display: block;
  }
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

export { Banner, Content, Related }
