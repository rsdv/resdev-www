/**
 * Get the colour and name, then tooltip the name
 * */

import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

import ColourRing from '../../ColourRing'

import { Group } from './components'

const ColourGroup = (props) => (
  <Group>
    <ReactTooltip />
    {props.colours.map(({ colour, name }, idx) => (
      <ColourRing data-tip={name} color={colour} key={idx} />
    ))}
  </Group>
)

ColourGroup.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.shape({
    colour: PropTypes.string.isRequired,
    name: PropTypes.string
  })).isRequired
}

export default ColourGroup
