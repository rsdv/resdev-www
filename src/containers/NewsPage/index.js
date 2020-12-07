/**
 *
 * Split both sides into separate containers
 *
 * Have a built in ./src/components/{Side}/{Section}/{index,Wrapper,Content,components}.js
 * */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";
import { Sidebar, Content } from './Content'

import Articles from "../../components/Articles";
import ArticlePreview from "../../components/ArticlePreview";
import NewsSidebar from "../../components/NewsSidebar";

class HTTPError extends Error {

  constructor(message, status, code) {
    super(message);

    this.status = status
    this.code = code
  }
}

const NewsPage = (props) => {
  const [articles, setArticles] = useState([])
  const [popular, setPopular] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const loadArticles = async () => {

      try {
        let response = await fetch('http://cms.localhost/articles')
        if (response.status !== 200) throw new HTTPError(`HTTPError [${response.status}]`, response.status, response.statusText)

        const data = await response.json()
        const articles = data.reduce((articles, curr) => {
          articles.push({
            _id: curr._id,
            author: 'Harry Wright',
            title: curr.title,
            desc: curr.description || curr.article.split('\n')[0],
            slug: curr.slug,
            photo: curr.images[0],
            published: new Date(curr.published_at),
            tags: curr.tags.map((el) => el.tag),
            word_count: curr.word_count
          })
          return articles
        }, [])

        // console.log(data, articles)
        setArticles(articles)
      } catch (err) {
        setError(true)
      }
    }

    const loadPage = async () => {
      try {
        let response = await fetch('http://cms.localhost/news-page')
        if (response.status !== 200) throw new HTTPError(`HTTPError [${response.status}]`, response.status, response.statusText)

        const data = await response.json()
        const articles = data.articles.reduce((articles, curr) => {
          articles.push({
            _id: curr._id,
            author: 'Harry Wright',
            title: curr.title,
            desc: curr.description || curr.article.split('\n')[0],
            slug: curr.slug,
            photo: curr.images[0],
            published: new Date(curr.published_at),
            tags: curr.tags.map((el) => el.tag),
            word_count: curr.word_count
          })
          return articles
        }, [])

        // console.log(data, articles)
        setPopular(articles)
      } catch (err) {
        setError(true)
      }
    }

    loadPage()
    loadArticles()
  }, [setArticles, setError, setPopular])

  return (
    <Wrapper>
      <Content>
        <Articles articles={articles} />
      </Content>
      <Sidebar>
        <NewsSidebar popular={popular}/>
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
