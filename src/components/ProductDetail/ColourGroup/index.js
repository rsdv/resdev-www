/**
 * Get the colour and name, then tooltip the name
 * */

import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import { useTheme } from "styled-components";

import ColourRing from '../../ColourRing'

import { Group } from './components'


const ColourGroup = (props) => {
  const theme = useTheme()

  return (
    <Group>
      <ReactTooltip textColor={theme.main.misc.tooltip["text-color"]} backgroundColor={theme.main.misc.tooltip["background-color"]} border={false} wrapper="span"/>
      {props.colours.map(({colour, name}, idx) => (
        <ColourRing data-tip={name} color={colour} key={idx}/>
      ))}
    </Group>
  )
}

ColourGroup.propTypes = {
  colours: PropTypes.arrayOf(PropTypes.shape({
    colour: PropTypes.string.isRequired,
    name: PropTypes.string
  })).isRequired
}

export default ColourGroup
