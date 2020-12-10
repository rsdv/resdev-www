import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';

import Theme from "../Theme";
import GlobalStyle from "../../components/GlobalStyle";

import ProductPage from "../ProductPage";
import NewsPage from "../NewsPage";
import NotFoundPage from "../NotFoundPage";
import ArticlePage from "../ArticlePage";
import CategoryPage from "../CategoryPage";

function App(props) {
  // Pass analytics for initialising the page
  // useEffect(() => { }, [])

  console.log(window.location.origin)

  return (
    <Theme>
      <GlobalStyle />
      <Switch>
        <Route path='/' component={NotFoundPage} exact />
        <Route path='/news' component={NewsPage} exact />
        <Route path='/news/:slug' render={ArticlePage} />
        <Route path='/category/:slug' component={CategoryPage} />
        <Route path='/industry/:slug' component={NotFoundPage} />
        <Route path='/products/:slug' render={ProductPage} />
        <Route path='/about-us' render={NotFoundPage} />
        <Route path='/service/:slug' component={NotFoundPage} />
      </Switch>
    </Theme>
  )
}

export default App
