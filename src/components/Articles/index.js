/**
 * Articles.js
 *
 * Component to handle the loading of the articles
 * and display them with a infinite scrolling
 * */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Wrapper from "./Wrapper";

import ArticlePreview from "../ArticlePreview";

const PAGE_LIMIT = 10

export default class Articles extends Component {

  state = {
    loading: true,
    infinite: true,
    articles: [],
    error: false,
    page: 0,
    prevY: 0
  }

  componentDidMount() {
    /* istanbul-ignore-next */
    this.getArticles(this.state.page)

    var options = {
      root: null,
      rootMargin: '128px',
      threshold: 0.5
    }

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y
    if (this.state.prevY > y) {
      const currentPage = this.state.page
      this.getArticles(currentPage + 1)
      this.setState({ page: currentPage + 1 })
    }
    this.setState({ prevY: y });
  }

  /**
   * Handle the loading of the articles
   * */
  async getArticles(page) {
    // Once the component is full no need to load more
    if (!this.state.infinite) return

    this.setState({ loading: true })

    try {
      const response = await fetch(`http://cms.localhost/articles?_start=${page * PAGE_LIMIT}&_limit=${PAGE_LIMIT}`)
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
      }, this.state.articles)

      let infinite = true
      if (data.length !== PAGE_LIMIT) infinite = false

      this.setState({ articles, infinite, loading: false })
    } catch (e) {
      this.setState({ loading: false, error: true })
    }
  }

  render() {
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

    return (
      <Wrapper>
        {this.state.articles.map((article) => <ArticlePreview article={article} key={article._id} />)}
        {/* Better css for this, just need more articles for now */}
        <div className='loading' ref={loadingRef => (this.loadingRef = loadingRef)}>
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </Wrapper>
    )
  }
}
