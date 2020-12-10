import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './components'

/**
 * May become a link??
 *
 * So add a hover
 * */
const Tag = ({ value }) => (
  <Wrapper>
    {value}
  </Wrapper>
)

Tag.propTypes = {
  value: PropTypes.string.isRequired
}

export default Tag
