import React from 'react'

import Wrapper from "./Wrapper";

import { Description, Title, Meta, Author, Details, Divider } from "./components";

import Time from "../../Time";
import ReadTime from "../../ReadTime";

const Content = (props) => (
  <Wrapper>
    <Title>Title</Title>
    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Lorem ipsum dolor sit amet, consectetur adipiscing elit. . Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
    <Meta>
      <Author>Harry Wright in Building</Author>
      <Details>
        <Time date={new Date('December 17, 1995 03:24:00')}/>
        <Divider />
        <ReadTime wordCount={100} />
      </Details>
    </Meta>
  </Wrapper>
)

export default Content
