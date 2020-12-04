/**
 * Product Photos
 *
 * Removed from the main product page so product page just
 * downloads the photos and this displays it
 * */

import React, { } from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";

import PhotoGallery from "../../components/PhotoGallery";

const Photos = (props) => (
  <Wrapper>
    <PhotoGallery photos={props.photos} />
  </Wrapper>
)

Photos.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    alt: PropTypes.string,
    src: PropTypes.string.isRequired
  })).isRequired
}

export default Photos
