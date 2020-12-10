import React from 'react'
import PropTypes from 'prop-types'

import Component from "./Button";

const Button = (props) => <Component {...props} />

Button.defaultProps = {
  inverse: false
}

Button.propTypes = {
  inverse: PropTypes.bool
}

export default Button
