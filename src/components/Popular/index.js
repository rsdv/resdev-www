/**
 *
 * Popular.js
 *
 * Ordered list of popular articles
 *
 * @note May make this generic, like product section for -
 * any sidebar content
 * */

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Wrapper from './Wrapper'

import ArticlePreview from '../ArticlePreview'
import { List, ListItem, Index, Header, H3, A } from './components'

const Popular = (props) => {
  return (
    <Wrapper>
      <Link to='/topic/popular' component={A}>
        <Header>
          <H3>Popular</H3>
        </Header>
      </Link>
      <List>
        {props.popular.map((article, idx) => (
          <ListItem key={article._id}>
            <Index>{idx + 1}</Index>
            <ArticlePreview article={article} type='aside' />
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

Popular.defaultProps = {
  popular: []
}

Popular.propTypes = {
  popular: PropTypes.arrayOf(PropTypes.object)
}

export default Popular
