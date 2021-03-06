import styled, { css } from 'styled-components'

const List = styled.ul`
  padding: 8px 0px 8px 0px;
  list-style-type: none;
  margin: auto;
  width: 100%;
`

const ListItem = styled.li`
  font-size: 12px;
  font-weight: 500;
  padding: 8px 0px 2px 0px;
  width: 100%;
  border-bottom: solid 0.5px rgba(155,155,155,0.4);
  
  div {
    height: 21px;
  }
`

const Content = styled.div`
  display: flex;
`

const Text = styled.div`
  margin: 0 auto;
  color: ${props => props.theme.main.colors.text.gray};
  
  ${({ align }) => align === 'right'
    ? css`
      font-weight: ${props => props.theme.main.typography.fontWeights.semiBold};
      text-align: right;
      width: 30%;
    `
    : css`
      font-weight: ${props => props.theme.main.typography.fontWeights.bold};
      text-align: left;
      width: 70%;
    `
  }
`

export { List, ListItem, Content, Text }
