/**
 *
 * ArticlePreview.Content.js
 *
 * The main content of the preview
 *
 * */

import React, { forwardRef } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";
import ArticleLink from "./ArticleLink";

import { Description, Title, Meta, Author, Details } from "./components";

import Time from "../../Time";
import ReadTime from "../../ReadTime";
import DotDivider from "../../DotDivider";

const Content = (props) => (
  <Wrapper margin={props.margin}>
    <Link to={`/news/${props.article.slug}`} component={ArticleLink}
          InternalComponent={Title} value={props.article.title} />
    {props.description
      ? <Link to={`/news/${props.article.slug}`} component={ArticleLink}
              InternalComponent={Description} value={props.article.desc} />
      : null
    }
    <Meta>
      <Author>{props.article.author} in {props.article.tags.join(', ')}</Author>
      <Details>
        <Time date={props.article.published}/>
        <DotDivider />
        <ReadTime wordCount={props.article.word_count} />
      </Details>
    </Meta>
  </Wrapper>
)

Content.defaultProps = {
  margin: true,
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
  description: PropTypes.bool,
  margin: PropTypes.bool
}

export default Content
