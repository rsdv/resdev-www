import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { Wrapper, Image  } from "./components";

const Photo = (props) => {
  const {
    alt,
    children,
    className,
    src,
    srcSet,
    size,
    style,
    index,
    onClick,
    imgProps,
    ...rest
  } = props

  // Might not be right but will do for now
  return (
    <Wrapper style={{...style}} {...rest}>
      <Image alt={alt} className={clsx(className)} src={src} srcSet={srcSet} onClick={onClick} index={index} {...imgProps} >
        {children}
      </Image>
    </Wrapper>

  )
}

Photo.defaultProps = {
  size: {
    width: '150px',
    height: '150px'
  }
}

Photo.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  size: PropTypes.exact({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
  }),
  index: PropTypes.number,
  onClick: PropTypes.func,
  imgProps: PropTypes.object
}

export default Photo
