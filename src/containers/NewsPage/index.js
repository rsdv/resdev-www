/**
 *
 * Split both sides into separate containers
 *
 * Have a built in ./src/components/{Side}/{Section}/{index,Wrapper,Content,components}.js
 * */

import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";
import { Sidebar, Content } from './Content'

import NotFound from "../../components/NotFound";
import LoadingIndicatorPage from "../LoadingIndicatorPage";
import Photo from "../../components/Photo";

import ArticlePreview from "../../components/ArticlePreview";

const NewsPage = (props) => {
  return (
    <Wrapper>
      <ArticlePreview />
    </Wrapper>
  )
}

NewsPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.object
  })
}

export default NewsPage
