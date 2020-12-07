import React from 'react'

import Wrapper from "./Wrapper";

import Photo from "../../Photo";

const Image = (props) => (
  <Wrapper>
    <Photo type="fixed-width" src='https://picsum.photos/152/300'/>
  </Wrapper>
)

export default Image
