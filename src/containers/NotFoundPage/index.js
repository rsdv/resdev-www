/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import NotFound from '../../components/NotFound'

const NotFoundPage = props => <NotFound {...props} />

NotFoundPage.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired
}

export default NotFoundPage
