/**
 * This could end up being re-intergrated into NewsPage
 * */
import React from 'react'
import PropTypes from "prop-types";

import Popular from "./Popular";


const NewsSidebar = (props) => {
  return (
    <>
      <Popular popular={props.popular} />
    </>
  )
}

NewsSidebar.defaultProps = {
  popular: []
}

NewsSidebar.propTypes = {
  popular: PropTypes.arrayOf(PropTypes.object)
}


export default NewsSidebar
