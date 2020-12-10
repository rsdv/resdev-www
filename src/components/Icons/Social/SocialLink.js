/**
 *
 * SocialLink.js
 *
 * Todo: Open a link to http://share.rsdv.co.uk/1234567890?source=twit
 *
 * https://twitter.com/intent/tweet?text=Understanding%20Ref%20Forwarding%20in%20React%20by%20%40ngArchangel%20https%3A%2F%2Fblog.bitsrc.io%2Funderstanding-ref-forwarding-in-react-80accd93ed74%3Fsource%3Dsocial.tw
 */

import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import { Twitter, LinkedIn } from './svgs'

function getComponent (name) {
  switch (name) {
    case 'LinkedIn':
      return LinkedIn
    case 'Twitter':
    default:
      return Twitter
  }
}

const SocialLink = ({ name, fill, id, disabled }) => {
  const onClick = () => {
    window.open(`http://share.localhost/${id}&source=${name.toLowerCase()}`, '_blank')
  }

  const Icon = getComponent(name)
  return (
    <Wrapper aria-label={`Share on ${name.toLowerCase()}`} onClick={onClick} disabled={disabled}>
      <Icon fill={fill} />
    </Wrapper>
  )
}

// Should be false but until I build the share service set to false
SocialLink.defaultProps = {
  disabled: true
}

SocialLink.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.oneOf(['LinkedIn', 'Twitter']).isRequired,
  fill: PropTypes.string
}

export default SocialLink
