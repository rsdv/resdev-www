/**
 * Automatic read-time calculator
 * */

import React from 'react'
import PropTypes from 'prop-types'

import Content from "./Content";
import ReactTooltip from "react-tooltip";

const WPM = 200
const calculator = (count) => count <= WPM ? 1 : Math.floor(count / WPM)

const ReadTime = (props) => (
  <>
    <ReactTooltip />
    <Content data-tip={`${props.wordCount} words`} title={`${calculator(props.wordCount)} min read`} />
  </>
)

ReadTime.propTypes = {
  wordCount: PropTypes.number.isRequired
}

export default ReadTime
