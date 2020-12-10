import React from 'react'
import PropTypes from 'prop-types'

import TagGroup from '../../TagGroup'

import { Title, Description } from './components'

const Header = ({ tags, title, children }) => (
  <>
    {tags && tags.length > 0 ? <TagGroup tags={tags} /> : null}
    <Title>{title}</Title>
    {children ? <Description>{children}</Description> : null}
  </>
)

Header.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Header
