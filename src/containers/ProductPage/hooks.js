import { useEffect, useState, useRef } from 'react';

class HTTPError extends Error {

  constructor(message, status, code) {
    super(message);

    this.status = status
    this.code = code
  }
}

const useFetch = ({ match: { params } }) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    error: false,
    isLoading: true,
    product: null
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://cms.localhost/products?slug=' + params.slug)
        if (response.status !== 200) throw new HTTPError(`HTTPError [${response.status}]`, response.status, response.statusText)

        let product = await response.json()

        // Using slug strapi returns an array as it's using `Model.find`
        // not `Model.findOne`, so just a final check as it returns an
        // empty product, could do maybe a did you mean??
        if (Array.isArray(product)) {
          product = product[product.findIndex((el) => el.slug === params.slug)]
        }

        // Return for a 404 page
        if (!product) return setState({ isLoading: false, error: true, product: null })

        setState({ isLoading: false, product, error: false })
      } catch (err) {
        if (isMounted.current) {
          setState({ isLoading: false, error: true, product: null });
        }
      }
    }

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, [])

  return state;
}

export default useFetch;
