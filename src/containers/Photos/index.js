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

const photos = [
  {
    src: 'https://www.designingbuildings.co.uk/w/images/c/cd/Terrazzo.jpg',
    alt: 'Terrazzo - Main'
  },
  {
    src: 'https://i2.wp.com/theconstructor.org/wp-content/uploads/2010/10/How-to-Lay-In-Situ-Terrazzo-Marble-Chips-Flooring-829x550.jpg',
    alt: 'Terrazzo - Marble'
  },
  {
    src: 'https://www.atrafloor.com/app/uploads/2018/05/orange-flicks-terrazzo-Swatch-Website.jpg',
    alt: 'Terrazzo - Orange'
  }
]

const Photos = (props) => (
  <Wrapper>
    <PhotoGallery photos={photos} />
  </Wrapper>
)

// TODO: Prop types

export default Photos
