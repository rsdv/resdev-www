/**
 *
 * SocialGroup.js
 *
 * Wrapper to hold the content social links inside
 *
 * */
import React from 'react'
import PropTypes from 'prop-types'

import { Social } from '../Icons'

import Content from "./Content";
import Wrapper from "./Wrapper";

const SocialGroup = (props) => (
  <Wrapper>
    {props.socials.map((el, idx) => (
      <Content key={idx}>
        <Social name={el} fill={props.fill} id={props.id} />
      </Content>
    ))}
  </Wrapper>
)

SocialGroup.defaultProps = {
  fill: '#4A4A4A'
}

SocialGroup.propTypes = {
  id: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.oneOf(['LinkedIn', 'Twitter'])).isRequired,
  fill: PropTypes.string
}

export default SocialGroup
