/**
 *
 * NewsPage.js
 *
 * Sidebar might just become the footer soon
 *
 * */
import React from 'react'
import PropTypes from 'prop-types'

import useFetch from "./hooks";

import Wrapper from "./Wrapper";
import { Sidebar, Content } from './Content'

import LoadingIndicatorPage from "../LoadingIndicatorPage";

import Popular from "../../components/Popular";
import Articles from "../../components/Articles";
import NotFound from "../../components/NotFound";

const NewsPage = (props) => {
  const { error, isLoading, popular } = useFetch()

  // Skeleton elements would be better
  if (isLoading) {
    return <LoadingIndicatorPage />
  }

  if (error) {
    return <NotFound history={props.history} />
  }

  return (
    <Wrapper>
      <Content>
        <Articles />
      </Content>
      <Sidebar>
        <Popular popular={popular} />
      </Sidebar>
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
