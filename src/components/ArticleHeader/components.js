import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${props => props.theme.main.colors.text.primary};
`

const Description = styled.div`
  font-size: 20px;
  color: ${props => props.theme.main.colors.text.secondary};
`

const MetaGroup = styled.div`
  font-size: 14px;
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
`

const Meta = styled.div`
  align-items: center;
  color: ${props => props.theme.main.colors.text.primary};
`

const Author = styled.div`
  font-weight: 600;
`

const Details = styled.span`
  white-space: nowrap!important;
  color: ${props => props.theme.main.colors.text.secondary};
`

const Socials = styled.div`
  display: flex;
  align-items: flex-end;
`

export { H1, Description, MetaGroup, Meta, Author, Details, Socials }
