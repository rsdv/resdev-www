import React from 'react'
import useDeviceContext from '../../hooks/useDevice'
import { Button } from '../../components/Button'
import ButtonGroup from '../../components/ButtonGroup'

import { H2 } from '../../components/Headers'
import { Banner, Content, Related, RelatedTitle } from './components'
import Markdown from '../../components/Markdown'
import RelatedGroup from '../../components/RelatedGroup'

const fakeText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget mi nec sem tincidunt varius et aliquet metus. Morbi vehicula rutrum lorem, at porttitor augue convallis ac. Nunc in purus tellus. Suspendisse eleifend, nisi et elementum blandit, mauris odio congue lectus, vulputate porta massa erat in quam. Integer mi eros, imperdiet et odio a, imperdiet porta metus. Suspendisse malesuada mi eu dictum tempor. Cras metus urna, ornare nec mi eu, accumsan consectetur magna.\n' +
  '\n' +
  'Nunc pellentesque elit id lorem volutpat ultricies. Quisque at ipsum enim. Sed pharetra neque sapien, sit amet condimentum dui iaculis imperdiet. Vestibulum iaculis ac nisl vitae dapibus. Duis posuere, arcu commodo tincidunt scelerisque, ligula ligula volutpat ante, et varius ante mi ut ligula. Praesent vitae odio varius, convallis justo ac, laoreet elit. Phasellus eu tortor pellentesque elit volutpat porta ac at sem. In hac habitasse platea dictumst. Donec sed commodo libero, at lacinia felis.'

const testProduct = Array(10).fill({ src: 'https://picsum.photos/150', title: 'Product', slug: 'pumaflow' })

const CategoryPage = () => {
  // Purely for demo
  const { width } = useDeviceContext()

  return (
    <>
      <Banner img={`https://picsum.photos/${width}/1000`} />
      <Content>
        <H2>Pumaflor Epoxy Flooring</H2>
        <Markdown style={{ fontSize: '18px' }} value={fakeText} />
        <ButtonGroup style={{ marginTop: '32px' }}>
          <Button>Find out more</Button>
          <Button inverse>Documentation</Button>
        </ButtonGroup>
        <Related>
          <RelatedTitle>See our products</RelatedTitle>
          <RelatedGroup products={testProduct} />
        </Related>
      </Content>
    </>
  )
}

export default CategoryPage
