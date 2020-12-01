import styled from 'styled-components'

const Details = styled.div`
  width: ${props => props.theme.main.sizes.columns['col-8']};
  margin-left: 32px;
  
  @media (min-width: ${props => props.theme.main.sizes.width.sm}) {
    width: ${props => props.theme.main.sizes.columns['col-7']};
  }
`

const Photos = styled.div`
  width: ${props => props.theme.main.sizes.columns['col-4']};
  
  @media (min-width: ${props => props.theme.main.sizes.width.sm}) {
    width: ${props => props.theme.main.sizes.columns['col-5']};
  }
`

export { Details, Photos }
