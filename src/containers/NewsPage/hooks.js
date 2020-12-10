/* global fetch */

import { useEffect, useRef, useState } from 'react'

import { HTTPError } from '../../utils/error'

const useFetch = () => {
  const isMounted = useRef(true)
  const [state, setState] = useState({
    error: false,
    isLoading: true,
    popular: []
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://cms.localhost/news-page')
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
        setState({ isLoading: false, popular: articles, error: false })
      } catch (err) {
        if (isMounted.current) {
          setState({ isLoading: false, error: true, popular: [] })
        }
      }
    }

    fetchData()

    return () => {
      isMounted.current = false
    }
  }, [])

  return state
}

export default useFetch
