import { useEffect, useRef, useState } from 'react';

import { HTTPError } from '../../utils/error'

const useFetch = ({ match: { params } }) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    error: false,
    isLoading: true,
    product: null,
    photos: []
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
        if (!product) return setState({ isLoading: false, error: true, product: null, photos: [] })

        // Overwrite the photos object to be more React friendly
        const photos = product.photos.reduce((photos, curr) => {
          photos.push({
            _id: curr._id,
            alt: curr.alternativeText,
            src: `http://cms.localhost${curr.url}`
          })

          return photos
        }, [])

        setState({ isLoading: false, product, photos, error: false })
      } catch (err) {
        if (isMounted.current) {
          setState({ isLoading: false, error: true, product: null, photos: [] });
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
