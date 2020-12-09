/**
 * ArticleLink.js
 *
 * Link wrapper to set the styled component behind the link
 *
 * */
import React, { forwardRef } from "react";

import { A } from './components'

const ArticleLink = forwardRef((props, ref) => {
  const {
    value,
    children,
    InternalComponent,
    ...rest
  } = props

  return (
    <A ref={ref} {...rest}>
      <InternalComponent>{value}</InternalComponent>
    </A>
  )
});

export default ArticleLink
