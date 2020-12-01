/**
 * Get the colour and name, then tooltip the name
 * */

import React from 'react'
import PropTypes from 'prop-types'

import ColourRing from "../../ColourRing";

import { Group } from "./components";

const ColourGroup = (props) => (
  <Group>
    {props.colours.map((colour, idx) => (
      <ColourRing color={colour} key={idx} />
    ))}
  </Group>
)

ColourGroup.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ColourGroup
