import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';

import Theme from "../Theme";
import ProductPage from "../ProductPage";
import GlobalStyle from "../../components/GlobalStyle";

function App(props) {
  // Pass analytics for initialising the page
  // useEffect(() => { }, [])

  return (
    <Theme>
      <GlobalStyle />
      <ProductPage />
      {/*<Switch>*/}
      {/*</Switch>*/}
    </Theme>
  )
}

export default App
