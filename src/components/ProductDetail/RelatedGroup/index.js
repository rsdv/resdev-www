import React from 'react'
import PropTypes from 'prop-types'

import Related from '../../Related'

import { Group } from './components'

const RelatedGroup = (props) => (
  <Group>
    {props.related.map((product, key) => (
      <Related product={product} key={key} />
    ))}
  </Group>
)

RelatedGroup.propTypes = {
  related: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
}

export default RelatedGroup
