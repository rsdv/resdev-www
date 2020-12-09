/**
 *
 * Social.js
 *
 * Social media icon
 *
 * */

import React from 'react'
import PropTypes from 'prop-types'

import SocialLink from "./SocialLink";

const Social = ({ name, fill, id, disabled }) =>
  <SocialLink name={name} fill={fill} id={id} disabled={disabled} />

Social.defaultProps = {
  fill: '#4A4A4A'
}

Social.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.oneOf(['LinkedIn', 'Twitter']).isRequired,
  fill: PropTypes.string
}

export default Social
