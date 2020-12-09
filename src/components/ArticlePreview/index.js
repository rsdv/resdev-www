/**
 *
 * ArticlePreview.js
 *
 * A preview of the news articles
 *
 * If `type === aside` the image and description should
 * be omitted. These can be placed then anywhere when
 * needed, i.e homepage/new's page, even product page
 * if they tag a product
 * */

import React from 'react'
import PropTypes from 'prop-types'

import { WrapperDiv, WrapperArticle } from "./Wrapper";

import Image from "./Image";
import Content from "./Content";

const ArticlePreview = (props) => {
  const {
    article,
    type
  } = props

  const Wrapper = type === 'aside' ? WrapperDiv : WrapperArticle
  const margin = type === 'default' ? !!article.photo : type !== 'aside'

  return (
    <Wrapper type={type}>
      <Content description={type === 'default'} article={article} margin={margin} />
      { type === 'default' && article.photo ? <Image src={`http://cms.localhost${article.photo.url}`} slug={article.slug}/> : null }
    </Wrapper>
  )
}

ArticlePreview.defaultProps = {
  article: {
    title: 'Title',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Harry Wright',
    published: new Date(),
    tags: ['Building'],
    word_count: 200,
    slug: '404'
  },
  type: 'default'
}

ArticlePreview.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    photo: PropTypes.object,
    published: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    slug: PropTypes.string,
    tags: PropTypes.array,
    word_count: PropTypes.number,
    _id: PropTypes.string.isRequired
  }).isRequired,
  type: PropTypes.oneOf(['default', 'aside']).isRequired
}

export default ArticlePreview
