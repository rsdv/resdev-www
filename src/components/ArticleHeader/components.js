import styled from 'styled-components'

const H1 = styled.h1`
  font-size: ${props => props.theme.main.typography.headers.h0};
  font-weight: ${props => props.theme.main.typography.fontWeights.black};
  color: ${props => props.theme.main.colors.text["gray-dark"]};
`

const Description = styled.div`
  // font-size: 20px;
  color: ${props => props.theme.main.colors.text["gray-light"]};
`

const MetaGroup = styled.div`
  font-size: 14px;
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
`

const Meta = styled.div`
  align-items: center;
  color: ${props => props.theme.main.colors.text.gray};
`

const Author = styled.div`
  font-weight: ${props => props.theme.main.typography.fontWeights.bold};
`

const Details = styled.span`
  white-space: nowrap!important;
  color: ${props => props.theme.main.colors.text["gray-light"]};
`

const Socials = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${props => props.theme.main.colors.text.gray};
`

export { H1, Description, MetaGroup, Meta, Author, Details, Socials }
