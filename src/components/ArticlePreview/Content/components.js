import styled from 'styled-components'

const Title = styled.h2`
  overflow: hidden!important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 64px;
  text-overflow: ellipsis;
  
  font-size: 24px;
  line-height: 28px;
  font-weight: 600;
  transform: translateY(-.72px);
`

const Description = styled.div`
  overflow: hidden!important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 40px;
  text-overflow: ellipsis;
  
  font-size: 16px;
  line-height: 20px;
  transform: translateY(1.52px);
  color: gray;
`

const Meta = styled.div`
  margin-top: 8px;
  font-size: 14px;
`

const Author = styled.div`
  
`

const Details = styled.span`
  white-space: nowrap!important;
  color: gray;
`

// Global this
const A = styled.a`
  color: inherit!important;
  text-decoration: none!important;
  background-color: transparent!important;
  
  &:hover {
    cursor: pointer;
  }
`

export { Title, Description, Meta, Author, A, Details }
