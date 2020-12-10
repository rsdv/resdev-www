/**
 * ArticleHeader.js
 *
 * All the main metadata for the article header
 * */

import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import { H1, Description, MetaGroup, Meta, Author, Details, Socials } from './components'

import Time from '../Time'
import ReadTime from '../ReadTime'
import DotDivider from '../DotDivider'
import SocialGroup from '../SocialGroup'

const ArticleHeader = (props) => {
  return (
    <Wrapper>
      <H1>{props.article.title}</H1>
      <Description>{props.article.description}</Description>
      <MetaGroup>
        <Meta>
          <Author>{props.article.author}</Author>
          <Details>
            <Time date={props.article.published} /><DotDivider /><ReadTime wordCount={props.article.word_count} />
          </Details>
        </Meta>
        <Socials>
          <SocialGroup socials={['Twitter', 'LinkedIn']} id={props.article._id} />
        </Socials>
      </MetaGroup>
    </Wrapper>
  )
}

ArticleHeader.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    word_count: PropTypes.number,
    published_at: PropTypes.object
  }).isRequired
}

export default ArticleHeader
