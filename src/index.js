/**
 *
 * index.js
 *
 * Entry point of the application
 */

import 'sanitize.css/sanitize.css'

// Third party css library needed
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
// import * as serviceWorker from './serviceWorker'

import Fonts from './components/Fonts'

import basename from './utils/basename'

// Import root component
import App from './containers/App'

// Import Providers
import DeviceContextProvider from './containers/DeviceProvider'

// Redux store
import store from './store'

const MOUNT_NODE = document.getElementById('root') || document.createElement('div')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DeviceContextProvider>
        <Fonts />
        <BrowserRouter basename={basename}>
          <App store={store} />
        </BrowserRouter>
      </DeviceContextProvider>
    </Provider>
  </React.StrictMode>,
  MOUNT_NODE
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
