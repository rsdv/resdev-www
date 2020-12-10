import React from 'react'
import PropTypes from 'prop-types'

import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

// Capitalise
dayjs.updateLocale('en', {
  relativeTime: {
    future: 'In %s',
    past: '%s ago',
    s: 'A few seconds',
    m: 'A minute',
    mm: '%d minutes',
    h: 'An hour',
    hh: '%d hours',
    d: 'A day',
    dd: '%d days',
    M: 'A month',
    MM: '%d months',
    y: 'A year',
    yy: '%d years'
  }
})

const Time = (props) => <time>{dayjs().to(props.date)}</time>

Time.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
}

export default Time
