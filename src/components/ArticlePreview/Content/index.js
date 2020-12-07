/**
 *
 * ArticlePreview.Content.js
 *
 * The main content of the preview
 *
 * */

import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";

import { Description, Title, Meta, Author, Details, Divider } from "./components";

import Time from "../../Time";
import ReadTime from "../../ReadTime";

const Content = (props) => (
  <Wrapper>
    <Title>{props.article.title}</Title>
    {props.description
      ? <Description>{props.article.desc}</Description>
      : null
    }
    <Meta>
      <Author>{props.article.author} in {props.article.tags.join(', ')}</Author>
      <Details>
        <Time date={props.article.published}/>
        <Divider />
        <ReadTime wordCount={props.article.word_count} />
      </Details>
    </Meta>
  </Wrapper>
)

Content.defaultProps = {
  description: true
}

Content.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    published: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    slug: PropTypes.string,
    tags: PropTypes.array,
    word_count: PropTypes.number
  }).isRequired,
  description: PropTypes.bool
}

export default Content
