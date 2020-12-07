/**
 * Could be better to just have two different components??
 * */

import styled from 'styled-components'

const Wrapper = styled.article`
  flex: 1 1 auto;
`

const WrapperArticle = styled(Wrapper).attrs({ as: 'article' })`
  display: flex;
  width: 100%;
  align-items: stretch;
  max-width: 680px;
`

const WrapperDiv = styled(Wrapper).attrs({ as: 'div' })`
  min-width: 200px;
  margin-left: 16px;
`

export default Wrapper
export { WrapperArticle, WrapperDiv }
