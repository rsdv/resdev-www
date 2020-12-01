import React, { Children, Fragment } from 'react'
import PropTypes from 'prop-types'

import TagGroup from "../../TagGroup";

import { Title, Description } from "./components";

const Header = ({ tags, title, children }) => (
  <Fragment>
    { tags && tags.length > 0 ? <TagGroup tags={tags} /> : null }
    <Title>{title}</Title>
    {!!children ? <Description>{children}</Description> : null}
  </Fragment>
)

Header.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Header
