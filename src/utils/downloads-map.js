/**
 * Map the Strapi response
 * */

const downloadMap = (value) => ({
  _id: value._id,
  value: value.caption,
  href: `http://cms.localhost${value.url}`
})

export default downloadMap
