/**
 * TODO: `spec.value` should be markdown compliant
 * */

import React from 'react'
import PropTypes from 'prop-types'

import marked from 'marked'

import { List, ListItem, Content, Text, Markdown } from './components'

const Specification = (props) => {
  const {
    spec
  } = props

  return (
    <List>
      {spec.map(({ key, value }, idx) => (
        <ListItem key={idx}>
          <Content>
            <Text align={'left'}>{key}</Text>
            <Text align={'right'}>
              <Markdown dangerouslySetInnerHTML={{ __html: marked(value) }} />
            </Text>
          </Content>
        </ListItem>
      ))}
    </List>
  )
}

Specification.propTypes = {
  spec: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
}

export default Specification
