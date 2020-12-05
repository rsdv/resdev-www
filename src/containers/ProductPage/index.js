/**
 *
 * Split both sides into separate containers
 *
 * Have a built in ./src/components/{Side}/{Section}/{index,Wrapper,Content,components}.js
 * */

import React from 'react'
import PropTypes from 'prop-types'


import useFetch from "./hooks";
import Wrapper from "./Wrapper";

import Photos from "../Photos";
import Details from "../Details";
import NotFound from "../../components/NotFound";
import LoadingIndicatorPage from "../LoadingIndicatorPage";

const ProductPage = (props) => {
  const { error, isLoading, product, photos } = useFetch(props);

  console.log('Here')

  if (isLoading) {
    return <LoadingIndicatorPage />
  }

  if (error) {
    return <NotFound history={props.history} />
  }

  return (
    <Wrapper>
      <Photos photos={photos}/>
      <Details product={product} />
    </Wrapper>
  )
}

ProductPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.object
  })
}

export default ProductPage
