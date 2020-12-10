import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

import Related from '../Related'

const RelatedGroup = (props) => {
  return (
    <Wrapper>
      {props.products.map((el, idx) => (
        <Related product={el} key={idx} />
      ))}
    </Wrapper>
  )
}

RelatedGroup.defaultProps = {
  align: 'center'
}

RelatedGroup.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string
  })).isRequired,
  align: PropTypes.oneOf(['center', 'start', 'end'])
}

export default RelatedGroup
