/**
 *
 * Split both sides into separate containers
 *
 * Have a built in ./src/components/{Side}/{Section}/{index,Wrapper,Content,components}.js
 * */

import React from 'react'

import PhotoGallery from "../../components/PhotoGallery";

import Wrapper from "./Wrapper";
import { Photos, Details } from './Content'
import { Specification, Downloads, RelatedGroup, ColourGroup, Header, Section } from '../../components/ProductDetail'

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

const spec = [
  {
    key: 'Fire Resistance (EN 13501-1)',
    value: 'B<sub>fl</sub>-s1'
  },
  {
    key: 'Wear Resistance (EN 13892-5)',
    value: '&lt; 1 cm<sup>3</sup>'
  },
  {
    key: 'Fire Resistance (EN 13501-1)',
    value: 'B<sub>fl</sub>-s1'
  }
]

const downloads = [
  { value: 'Product Datasheet' },
  { value: "Declaration of Performance"}
]

const related = [
  { src: 'https://www.atrafloor.com/app/uploads/2018/05/orange-flicks-terrazzo-Swatch-Website.jpg', title: 'Product Name' },
  { src: 'https://www.atrafloor.com/app/uploads/2018/05/orange-flicks-terrazzo-Swatch-Website.jpg', title: 'Product Name' }
]

const colours = [
  '#50E3C2',
  '#4A90E2',
  '#8B572A',
  '#417505'
]

class ProductPage extends React.Component {

  state = {

  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    return (
      <Wrapper>
        <Photos>
          <PhotoGallery photos={photos} />
        </Photos>
        <Details>
          <Header title={"Product Name"} tags={['Pumadur', 'Building Materials']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et leo lacinia, porttitor massa et, accumsan diam. Maecenas bibendum nisi in hendrerit rutrum. Praesent tempor dapibus odio, eu dictum nisi ultrices a. Sed feugiat congue tortor non pretium. Integer mollis, risus vel egestas condimentum, lectus urna fermentum arcu, varius posuere massa mauris ut sem. Praesent est mauris, pulvinar ac lorem at, tincidunt vulputate ipsum.
          </Header>
          <Section title={'Colours'}>
            <ColourGroup colours={colours} />
          </Section>
          <Section title={"Specification"}>
            <Specification spec={spec} />
          </Section>
          <Section title={"Downloads"}>
            <Downloads downloads={downloads} />
          </Section>
          <Section title={"Related Products"}>
            <RelatedGroup related={related} />
          </Section>
        </Details>
      </Wrapper>
    )
  }
}

export default ProductPage
