import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";

import ArticlePreview from "../ArticlePreview";

const Articles = (props) => {
  // Handle fetch and pagination

  return (
    <Wrapper>
      {props.articles.map((article) => <ArticlePreview article={article} key={article._id} />)}
    </Wrapper>
  )
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
}

export default Articles
