/**
 *
 * Split both sides into separate containers
 *
 * Have a built in ./src/components/{Side}/{Section}/{index,Wrapper,Content,components}.js
 * */

import React from 'react'

import TagGroup from "../../components/TagGroup";
import PhotoGallery from "../../components/PhotoGallery";

import Wrapper from "./Wrapper";
import { Photos, Details } from './Content'
import {Title, Description, Section, SectionHeader, SectionBody} from "./components";
import Related from "../../components/Related";
import ColourRing from "../../components/ColourRing";
import {Download} from "../../components/Icons";

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

class ProductPage extends React.Component {

  render() {
    return (
      <Wrapper>
        <Photos>
          <PhotoGallery photos={photos} />
        </Photos>
        <Details>
          <TagGroup tags={['Pumadur', 'Building Materials']} />
          <Title>
            Product Name
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et leo lacinia, porttitor massa et, accumsan diam. Maecenas bibendum nisi in hendrerit rutrum. Praesent tempor dapibus odio, eu dictum nisi ultrices a. Sed feugiat congue tortor non pretium. Integer mollis, risus vel egestas condimentum, lectus urna fermentum arcu, varius posuere massa mauris ut sem. Praesent est mauris, pulvinar ac lorem at, tincidunt vulputate ipsum.
          </Description>
          <Section className="product-colors">
            <SectionHeader>Colours</SectionHeader>
            <SectionBody>
              <ColourRing color={'#50E3C2'} style={{ marginRight: '8px' }} />
              <ColourRing color={'#4A90E2'} style={{ marginRight: '8px' }} />
              <ColourRing color={'#8B572A'} style={{ marginRight: '8px' }} />
              <ColourRing color={'#417505'} />
            </SectionBody>
          </Section>
          <Section>
            <SectionHeader>Specification</SectionHeader>
            <SectionBody>
              <ul style={{width: '100%', listStyleType: 'none', margin: 'auto'}}>
                <li style={{width: '100%'}}>
                  <div style={{display: 'flex'}}>
                    <div style={{textAlign: 'left', width: '70%', margin: '0 auto'}}>Fire Resistance (EN 13501-1)</div>
                    <div style={{textAlign: 'right', width: '30%', margin: '0 auto'}}>B<sub>fl</sub>-s1</div>
                  </div>
                </li>
                <li style={{width: '100%'}}>
                  <div style={{display: 'flex'}}>
                    <div style={{textAlign: 'left', width: '70%', margin: '0 auto'}}>Wear Resistance (EN 13892-5)</div>
                    <div style={{textAlign: 'right', width: '30%', margin: '0 auto'}}>&lt; 1 cm<sup>3</sup></div>
                  </div>
                </li>
                <li style={{width: '100%'}}>
                  <div style={{display: 'flex'}}>
                    <div style={{textAlign: 'left', width: '70%', margin: '0 auto'}}>Impact Resistance (EN ISO 6272)</div>
                    <div style={{textAlign: 'right', width: '30%', margin: '0 auto'}}>15Nm</div>
                  </div>
                </li>
              </ul>
            </SectionBody>
          </Section>
          <Section className="product-downloads">
            <SectionHeader>Downloads</SectionHeader>
            <SectionBody style={{display: 'block'}}>
              <div style={{display: 'flex', width: '100%', paddingBottom: '8px'}}>
                <Download style={{ width: '40px', height: '40px' }} width={'25px'} height={'35px'}/>
                <span style={{ lineHeight: '40px', paddingLeft: '8px', fontSize: '12px', fontWeight: '600' }}>Product Datasheet</span>
              </div>
              <div style={{display: 'flex', width: '100%'}}>
                <Download style={{ width: '40px', height: '40px' }} width={'25px'} height={'35px'}/>
                <span style={{ lineHeight: '40px', paddingLeft: '8px', fontSize: '12px', fontWeight: '600' }}>Declaration of Performance</span>
              </div>
            </SectionBody>
          </Section>
          <Section className="product-related">
            <SectionHeader>Related Products</SectionHeader>
            <SectionBody>
              <Related product={{ src: 'https://www.atrafloor.com/app/uploads/2018/05/orange-flicks-terrazzo-Swatch-Website.jpg', title: 'Product Name' }} style={{ marginRight: '16px' }}/>
              <Related product={{ src: 'https://www.atrafloor.com/app/uploads/2018/05/orange-flicks-terrazzo-Swatch-Website.jpg', title: 'Product Name' }} />
            </SectionBody>
          </Section>
        </Details>
      </Wrapper>
    )
  }
}

export default ProductPage
