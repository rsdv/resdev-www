/**
 *
 * Markdown.js
 *
 * Todo:
 *
 * */
import 'github-markdown-css'

import React from 'react'
import PropTypes from 'prop-types'

import marked from 'marked'

import Wrapper from './Wrapper'

const Markdown = ({ value, absolutePath, inline, ...rest }) => {
  return <Wrapper className='markdown-body' dangerouslySetInnerHTML={{ __html: marked(value, { baseUrl: absolutePath, breaks: true }) }} inline={inline} {...rest} />
}

Markdown.defaultProps = {
  inline: false
}

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
  absolutePath: PropTypes.string,
  inline: PropTypes.bool
}

export default Markdown
