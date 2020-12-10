import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

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
      <Link to={`/products/${product.slug}`}>
        <Photo src={product.src} />
      </Link>
      <Link to={`/products/${product.slug}`}>
        <span className='related-title'>{product.title}</span>
      </Link>
    </Wrapper>
  )
}

Related.propTypes = {
  product: PropTypes.exact({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func,
  width: PropTypes.string
}

export default Related
