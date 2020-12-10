import React from 'react'
import PropTypes from 'prop-types'

import DeviceContext from '../../contexts/Device'

// The value is defaulted and cannot be changed
const DeviceContextProvider = ({ children }) => {
  const deviceData = {
    isApple: false,
    isMobile: false,
    isAndroid: false,
    deviceType: 'device-other',
    width: window.innerWidth
  }

  if (/(iPhone|iPad|iPod)/.test(navigator.userAgent)) {
    deviceData.isApple = true
    deviceData.isMobile = true
    deviceData.deviceType = 'device-ios'

    document.body.classList.add('device-ios')
  } else if (/Android/.test(navigator.userAgent)) {
    deviceData.isAndroid = true
    deviceData.isMobile = true
    deviceData.deviceType = 'device-android'

    document.body.classList.add('device-android')
  } else {
    document.body.classList.add('device-other')
  }

  return (
    <DeviceContext.Provider value={deviceData}>
      {children}
    </DeviceContext.Provider>
  )
}

DeviceContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default DeviceContextProvider
