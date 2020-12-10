import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import { Button } from '../Button'
import { Title, ButtonGroup } from './components'

const NotFound = ({ history }) => {
  const handleHome = (e) => {
    e.stopPropagation()
    history.push('/')
  }

  const handleBack = () => {
    history.goBack()
  }

  return (
    <Wrapper>
      <Title>Something went <span>wrong</span></Title>
      <ButtonGroup>
        <Button kind='home' onClick={handleHome}>Go home</Button>
        <Button inverse kind='back' onClick={handleBack}>Back</Button>
      </ButtonGroup>
    </Wrapper>
  )
}

NotFound.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    goBack: PropTypes.func
  }).isRequired
}

export default NotFound
