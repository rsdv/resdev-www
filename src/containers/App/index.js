import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';

import Theme from "../Theme";
import PhotoGallery from "../../components/PhotoGallery";
import Tag from '../../components/Tag'
import GlobalStyle from "../../components/GlobalStyle";

const photos = [
  {
    src: 'https://www.designingbuildings.co.uk/w/images/c/cd/Terrazzo.jpg',
    alt: 'Terrazzo - Main'
  },
  {
    src: 'https://i2.wp.com/theconstructor.org/wp-content/uploads/2010/10/How-to-Lay-In-Situ-Terrazzo-Marble-Chips-Flooring-829x550.jpg',
    alt: 'Terrazzo - Marble'
  },
  {
    src: 'https://www.atrafloor.com/app/uploads/2018/05/orange-flicks-terrazzo-Swatch-Website.jpg',
    alt: 'Terrazzo - Orange'
  }
]

function App(props) {

  // Pass analytics for initialising the page
  // useEffect(() => { }, [])
  return (
    <Theme>
      <GlobalStyle />
      {/*<PhotoGallery photos={photos} initialIndex={2}/>*/}
      <div style={{display: 'flex', 'margin-top': '16px', 'margin-left': '16px'}}>
        <Tag value={"Pumadur"}/>
        <Tag value={"Polyurethane Screed"}/>
        <Tag value={"Heavy Duty"}/>
        <Tag value={"Type 8"}/>
      </div>
      {/*<Switch>*/}

      {/*</Switch>*/}
    </Theme>
  )
}

export default App
