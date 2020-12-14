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

let count = 0
class Markdown extends React.Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextProps, nextState, nextContext, count++)
    return true
  }

  render() {
    const {
      value,
      absolutePath,
      inline,
      ...rest
    } = this.props

    return <Wrapper className='markdown-body' dangerouslySetInnerHTML={{ __html: marked(value, { baseUrl: absolutePath, breaks: true }) }} inline={inline} {...rest} />
  }

}
// const Markdown = ({ value, absolutePath, inline, ...rest }) => {
//   console.log(value, count++)
//   return <Wrapper className='markdown-body' dangerouslySetInnerHTML={{ __html: marked(value, { baseUrl: absolutePath, breaks: true }) }} inline={inline} {...rest} />
// }
//
Markdown.defaultProps = {
  inline: false,
  value: '',
}
//
Markdown.propTypes = {
  value: PropTypes.string.isRequired,
  absolutePath: PropTypes.string,
  inline: PropTypes.bool
}

export default Markdown
