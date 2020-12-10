/**
 *
 * LoadingIndicatorPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'

const LoadingIndicatorPage = props => {
  if (props.error) {
    return (
      <div style={{ padding: 64 }}>
        <h2>Error</h2>
        <p>{props.error && props.error.toString()}</p>
        <br />
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {props.error.stack}
        </details>
      </div>
    )
  }

  return (
    <Loader>
      <div />
    </Loader>
  )
}

LoadingIndicatorPage.defaultProps = {
  error: null
}

LoadingIndicatorPage.propTypes = {
  error: PropTypes.object
}

export default LoadingIndicatorPage
