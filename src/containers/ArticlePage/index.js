import React from 'react'

import useFetch from './hooks'

import Wrapper from './Wrapper'

import LoadingIndicatorPage from '../LoadingIndicatorPage'

import Markdown from '../../components/Markdown'
import NotFound from '../../components/NotFound'
import ArticleHeader from '../../components/ArticleHeader'

const ArticlePage = (props) => {
  const { isLoading, error, article } = useFetch(props)

  if (isLoading) return <LoadingIndicatorPage />

  if (error) return <NotFound history={props.history} />

  return (
    <Wrapper className='container-md'>
      <ArticleHeader article={article} />
      <Markdown value={article.article} absolutePath='http://cms.localhost' />
    </Wrapper>
  )
}

export default ArticlePage
