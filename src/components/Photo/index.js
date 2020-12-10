import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Wrapper, Image } from './components'

const Photo = (props) => {
  const {
    alt,
    children,
    className,
    src,
    srcSet,
    type,
    style,
    index,
    onClick,
    imgProps,
    ...rest
  } = props

  // Might not be right but will do for now
  return (
    <Wrapper style={{ ...style }} type={type} {...rest}>
      <Image alt={alt} className={clsx(className)} type={type} src={src} srcSet={srcSet} onClick={onClick} index={index} {...imgProps}>
        {children}
      </Image>
    </Wrapper>

  )
}

Photo.defaultProps = {
  type: 'square'
}

Photo.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  type: PropTypes.oneOf(['square', 'fixed-width']),
  index: PropTypes.number,
  onClick: PropTypes.func,
  imgProps: PropTypes.object
}

export default Photo
