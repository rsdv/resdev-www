import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';

import Theme from "../Theme";
import ProductPage from "../ProductPage";
import GlobalStyle from "../../components/GlobalStyle";

function App(props) {
  // Pass analytics for initialising the page
  // useEffect(() => { }, [])

  console.log(window.location.origin)

  return (
    <Theme>
      <GlobalStyle />
      <Switch>
        <Route path='/products/:slug' render={props => <ProductPage {...props} />}/>
        {/*<Route path='*' render={props => <NotFound history={props.history} /> } />*/}
      </Switch>
    </Theme>
  )
}

export default App
