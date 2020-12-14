/**
 * Product Details
 *
 * Removed from the main product page so product page just
 * downloads the content and this displays it
 * */

import React, { } from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

import Markdown from '../../../components/Markdown'
import { Specification, Downloads, RelatedGroup, ColourGroup, Header, Section } from '../../../components/ProductDetail'

import downloadMap from '../../../utils/downloads-map'

const related = [
  { src: 'https://www.atrafloor.com/app/uploads/2018/05/orange-flicks-terrazzo-Swatch-Website.jpg', title: 'Product Name' },
  { src: 'https://www.atrafloor.com/app/uploads/2018/05/orange-flicks-terrazzo-Swatch-Website.jpg', title: 'Product Name' }
]

const Details = (props) => {
  const {
    Title,
    description,
    tags,
    colours,
    specification,
    datasheets
  } = props.product

  /**
   * For cleaner reading pull these out
   * */

  const ColourSection = (!!colours && colours.length > 0) ? (
    <Section title='Colours'>
      <ColourGroup colours={colours.map((el) => ({ colour: el.colour, name: el.name }))} />
    </Section>
  ) : null

  const SpecificationSection = (!!specification && specification.length > 0) ? (
    <Section title='Specification'>
      <Specification spec={specification} />
    </Section>
  ) : null

  const DownloadSection = (!!datasheets && datasheets.length > 0) ? (
    <Section title='Downloads'>
      <Downloads downloads={datasheets.map(downloadMap)} />
    </Section>
  ) : null

  const keys = ['Pumadur', 'Pumathane', 'Pumaflow']
  const tag = tags[tags.findIndex((el) => keys.indexOf(el.tag.toLowerCase()))].tag

  return (
    <Wrapper>
      <Header tag={tag} title={Title} tags={tags.map((el) => el.tag)}>
        {!!description ? <Markdown value={description} style={{ fontSize: 'inherit' }} /> : (<></>)}
      </Header>
      {ColourSection}
      {SpecificationSection}
      {DownloadSection}
      <Section title='Related Products'>
        <RelatedGroup related={related} />
      </Section>
    </Wrapper>
  )
}

Details.propTypes = {
  product: PropTypes.shape({
    Title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
      tag: PropTypes.string
    })),
    colours: PropTypes.arrayOf(PropTypes.shape({
      colour: PropTypes.string,
      name: PropTypes.string
    })),
    specification: PropTypes.array,
    datasheets: PropTypes.array
  }).isRequired
}

export default Details
