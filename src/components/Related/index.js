import React from 'react'
import PropTypes from 'prop-types'

import Photo from '../Photo'

import Wrapper from './Wrapper'

const Related = (props) => {
  const {
    product,
    width,
    style,
    ...rest
  } = props

  return (
    <Wrapper style={{ ...style, width: width || '150px' }} {...rest}>
      <Photo src={product.src} />
      <span className='related-title'>{product.title}</span>
    </Wrapper>
  )
}

Related.propTypes = {
  product: PropTypes.exact({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func,
  width: PropTypes.string
}

export default Related
