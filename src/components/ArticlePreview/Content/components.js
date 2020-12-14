import styled from 'styled-components'

const Title = styled.h2`
  overflow: hidden!important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 64px;
  text-overflow: ellipsis;
  
  font-size: ${props => props.theme.main.typography.headers.h2};
  line-height: 28px;
  font-weight: ${props => props.theme.main.typography.fontWeights.bold};
  transform: translateY(-.72px);
`

const Description = styled.div`
  overflow: hidden!important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 40px;
  text-overflow: ellipsis;

  line-height ${props => props.theme.main.typography.lineHeights["default"]};
  transform: translateY(1.52px);
  color: ${props => props.theme.main.colors.text["gray-light"]};
`

const Meta = styled.div`
  margin-top: 8px;
  font-size: ${props => props.theme.main.typography["font-size-small"]};
`

const Author = styled.div`
  color: ${props => props.theme.main.colors.text.gray};
  font-weight: ${props => props.theme.main.typography.fontWeights.semiBold};
`

const Details = styled.span`
  white-space: nowrap!important;
  color: ${props => props.theme.main.colors.text["gray-light"]};
`

// Global this
const A = styled.a`
  &:hover {
    cursor: pointer;
  }
`

export { Title, Description, Meta, Author, A, Details }
