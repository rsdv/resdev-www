/**
 * This isn't perfect
 *
 * Would also need a tooltip too
 * */

import React from 'react'
import PropTypes from 'prop-types'

import Circle from "./Circle";

const ColourRing = ({ color, style, ...rest }) => <Circle style={{...style, backgroundColor: color}} {...rest} />

ColourRing.propTypes = {
  color: PropTypes.string.isRequired
}

export default ColourRing
