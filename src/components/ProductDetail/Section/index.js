/**
 * Simple section wrapper
 * */

import React from 'react'
import PropTypes from 'prop-types'

import { Section as Wrapper, SectionHeader as Header, SectionBody as Content } from './components'

const Section = ({ title, children, ...rest }) => (
  <Wrapper {...rest}>
    <Header>{title}</Header>
    <Content>{children}</Content>
  </Wrapper>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default Section
