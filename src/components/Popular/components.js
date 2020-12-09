import styled from 'styled-components'

const List = styled.ol`
  padding: 32px;
  list-style: none;
  list-style-image: none;
  margin: 0;
  
  & li {
    margin-bottom: 24px;
  }
  
  & li:last-child {
    margin-bottom: 0px;
  }
`

const ListItem = styled.li`
  display: flex;
  line-height: 20px;
`

const Header = styled.div`
  border-bottom: solid 0.5px rgba(155,155,155,0.4);
  padding-bottom: 16px;
  margin: 16px 32px 0px 32px;
`

const A = styled.a`
  color: inherit!important;
  text-decoration: none!important;
  background-color: transparent!important;
  
  &:hover {
    cursor: pointer;
  }
`

const H3 = styled.h3`
  font-size: 24px;
  font-height: 28px;
  font-weight: 600;
  transform: translateY(-.72px);
  
  margin: 0;
`

const Index = styled.div`
  font-size: 34px;
  margin-top: 4px;
  
  color: rgba(0,0,0,.15)!important;
  fill: rgba(0,0,0,.15)!important;
`

export { List, ListItem, Index, Header, H3, A }
