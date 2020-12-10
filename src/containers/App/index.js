import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Theme from '../Theme'
import GlobalStyle from '../../components/GlobalStyle'

import ProductPage from '../ProductPage'
import NewsPage from '../NewsPage'
import NotFoundPage from '../NotFoundPage'
import ArticlePage from '../ArticlePage'
import CategoryPage from '../CategoryPage'

/* eslint-ignore-next */
function App (props) {
  // Pass analytics for initialising the page
  // useEffect(() => { }, [])

  return (
    <Theme>
      <GlobalStyle />
      <Switch>
        <Route path='/' component={NotFoundPage} exact />
        <Route path='/news' component={NewsPage} exact />
        <Route path='/news/:slug' component={ArticlePage} />
        <Route path='/category/:slug' component={CategoryPage} />
        <Route path='/industry/:slug' component={NotFoundPage} />
        <Route path='/products/:slug' component={ProductPage} />
        <Route path='/about-us' component={NotFoundPage} />
        <Route path='/service/:slug' component={NotFoundPage} />
      </Switch>
    </Theme>
  )
}

export default App
