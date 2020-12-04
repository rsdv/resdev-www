/**
 * Product Details
 *
 * Removed from the main product page so product page just
 * downloads the content and this displays it
 * */

import React, { } from 'react'
import PropTypes from 'prop-types'

import marked from 'marked'

import Wrapper from "./Wrapper";

import Theme from "../Theme";
import Markdown from "../../components/Markdown";
import { Specification, Downloads, RelatedGroup, ColourGroup, Header, Section } from '../../components/ProductDetail'

import theme, { pumaflow, pumathane, pumadur } from '../../themes'

const downloads = [
  { value: 'Product Datasheet' },
  { value: "Declaration of Performance"}
]

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
    specification
  } = props.product

  // Pretty shit but maybe works
  const getTheme = (tags) => {
    const keys = ['Pumadur', 'Pumathane', 'Pumaflow']

    switch (tags[tags.findIndex((el) => keys.indexOf(el.tag.toLowerCase()))].tag) {
      case 'Pumadur': return pumadur()
      case 'Pumathane': return pumathane()
      case 'Pumaflow': return pumaflow()
      default: return theme
    }
  }

  return (
    <Wrapper>
      <Theme value={getTheme(tags)}>
        <Header title={Title} tags={tags.map((el) => el.tag)}>
          <Markdown dangerouslySetInnerHTML={{ __html: marked(description) }} />
        </Header>
        {!!colours && colours.length > 0 ? <Section title={'Colours'}>
          <ColourGroup colours={colours.map((el) => ({ colour: el.colour, name: el.name }))} />
        </Section> : null }
        {!!specification && specification.length > 0 ? <Section title={"Specification"}>
          <Specification spec={specification} />
        </Section> : null }
        <Section title={"Downloads"}>
          <Downloads downloads={downloads} />
        </Section>
        <Section title={"Related Products"}>
          <RelatedGroup related={related} />
        </Section>
      </Theme>
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
    specification: PropTypes.array
  }).isRequired
}

export default Details
