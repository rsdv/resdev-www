/**
 * TODO: Turn into a link
 *
 * Could even be a list, saves a block display??
 * */

import React from 'react'
import PropTypes from 'prop-types'

import { Download } from "../../Icons";

import Wrapper from "./Wrapper";
import { Content, Label } from "./components";

const Downloads = (props) => (
  <Wrapper>
    {props.downloads.map(({ _, value }, idx) => (
      <Content key={idx}>
        <Download style={{ width: '40px', height: '40px' }} width={'25px'} height={'35px'}/>
        <Label>{value}</Label>
      </Content>
    ))}
  </Wrapper>
)

Downloads.propTypes = {
  downloads: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    value: PropTypes.string.isRequired
  })).isRequired
}

export default Downloads
