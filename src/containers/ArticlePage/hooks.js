/**
 * Fetch the article info
 * */

import { useEffect, useRef, useState } from 'react';

import { HTTPError } from '../../utils/error'

const useFetch = ({ match: { params } }) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    error: false,
    isLoading: true,
    article: null
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://cms.localhost/articles?slug=' + params.slug)
        if (response.status !== 200) throw new HTTPError(`HTTPError [${response.status}]`, response.status, response.statusText)

        let data = await response.json()

        // Overkill but just in-case we do get more than one
        //
        // Will look at a custom controller for the future to
        // replace this
        const articles = data.reduce((articles, curr) => {
          articles.push({
            _id: curr._id,
            author: 'Harry Wright',
            article: curr.article,
            title: curr.title,
            description: curr.description || curr.article.split('\n')[0],
            slug: curr.slug,
            photo: curr.images[0],
            published: new Date(curr.published_at),
            tags: curr.tags.map((el) => el.tag),
            word_count: curr.word_count
          })
          return articles
        }, [])

        const article = articles[0]
        if (!article) return setState({ isLoading: false, error: true, article: null });

        setState({ isLoading: false, article, error: false })
      } catch (err) {
        if (isMounted.current) {
          setState({ isLoading: false, error: true, article: null });
        }
      }
    }

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, [params])

  return state;
}

export default useFetch;
