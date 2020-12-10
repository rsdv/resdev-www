import React from 'react'
import PropTypes from 'prop-types'

import Tag from '../Tag'
import Wrapper from './Wrapper'

// onClick isn't 100%
//
// Could do with a better exit target, { name: 'product-tag', value: 'Example', idx: 2, type: 'group' }
const TagGroup = (props) => {
  const {
    tags,
    onClick
  } = props

  const _onClick = (e) => {
    onClick && onClick(tags[parseInt(e.target.getAttribute('data-index'))])
  }

  return (
    <Wrapper>
      {tags.map((el, idx) => (
        <Tag value={el} key={idx} data-value={idx} onClick={_onClick} />
      ))}
    </Wrapper>
  )
}

TagGroup.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func
}

export default TagGroup
