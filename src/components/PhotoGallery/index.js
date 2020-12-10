/**
 *
 * PhotoGallery.js
 *
 * @note Not 100% but will work for now.
 *
 * Dynamically generating
 *
 * Should also change layout on touching and
 * have a open all if there is more than 4 selectors
 * */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Photo from '../Photo'
import Wrapper from './Wrapper'
import { Grid, Main, Selector } from './components'

// TODO: Turn this into a class
const PhotoGallery = (props) => {
  const {
    initialIndex,
    photos
  } = props

  if (initialIndex > photos.length) throw new Error('Initial Index is invalid [' + initialIndex + ']')

  const [activeIndex, setActiveIndex] = useState(props.initialIndex || 0)

  const onClick = (e) => {
    setActiveIndex(parseInt(e.target.getAttribute('data-index')))
  }

  // Get the main photo here
  const photo = photos[activeIndex]
  const main = (
    <Main><Photo src={photo.src} alt={photo.alt} /></Main>
  )

  return (
    <Wrapper>
      <Grid>
        {photos.map(({ src, alt }, idx) => (
          <Selector key={src._id || idx}>
            <Photo
              className={clsx((idx === activeIndex && 'selected'))} src={src} alt={alt}
              imgProps={{ 'data-index': idx }} onClick={onClick}
            />
          </Selector>
        ))}
      </Grid>
      {main}
    </Wrapper>
  )
}

PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialIndex: PropTypes.number,
  infiniteLoop: PropTypes.bool
}

export default PhotoGallery
