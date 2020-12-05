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
    {props.downloads.map(({ _id, href, value }, idx) => (
      <Content key={_id || idx}>
        <a href={href} target={'_blank'} rel={"noreferrer"}>
          <Download style={{ width: '40px', height: '40px' }} width={'25px'} height={'35px'}/>
        </a>
        <Label>{value}</Label>
      </Content>
    ))}
  </Wrapper>
)

Downloads.propTypes = {
  downloads: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    href: PropTypes.string,
    value: PropTypes.string.isRequired
  })).isRequired
}

export default Downloads
