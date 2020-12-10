/**
 *
 * ArticlePreview.Image.js
 *
 * Wrapper for the image on the news articles preview
 * */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Wrapper from './Wrapper'

import Photo from '../../Photo'

const Image = (props) => (
  <Wrapper>
    <Link to={`/news/${props.slug}`}>
      <Photo type='fixed-width' src={props.src} alt={props.alt} />
    </Link>
  </Wrapper>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  slug: PropTypes.string,
  alt: PropTypes.string
}

export default Image
