/**
 *
 * ArticlePreview.Image.js
 *
 * Wrapper for the image on the news articles preview
 * */

import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";

import Photo from "../../Photo";

const Image = (props) => (
  <Wrapper>
    <Photo type="fixed-width" src={props.src} alt={props.alt} />
  </Wrapper>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default Image
