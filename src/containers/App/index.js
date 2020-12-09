import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';

import Theme from "../Theme";
import GlobalStyle from "../../components/GlobalStyle";

import ProductPage from "../ProductPage";
import NewsPage from "../NewsPage";
import NotFoundPage from "../NotFoundPage";
import ArticlePage from "../ArticlePage";

function App(props) {
  // Pass analytics for initialising the page
  // useEffect(() => { }, [])

  console.log(window.location.origin)

  return (
    <Theme>
      <GlobalStyle />
      <Switch>
        <Route path='/products/:slug' render={props => <ProductPage {...props} />} />
        <Route path='/news' render={props => <NewsPage {...props} />} exact />
        <Route path='/news/:slug' render={props => <ArticlePage {...props} />} />
        <Route path='' component={NotFoundPage} />
      </Switch>
    </Theme>
  )
}

export default App
