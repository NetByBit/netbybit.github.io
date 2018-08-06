import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Navbar from './navbar'

const Layout = ({ locale, data, children }) => {
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <html lang={locale} dir={dir} />
      </Helmet>
      <Navbar locale={locale} />
      {children}
    </>
  )
}

Layout.propTypes = {
  locale: PropTypes.oneOf(['en-US', 'ar']).isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout

export const seoFragment = graphql`
  fragment Seo on ContentfulSeo {
    title
    description
  }
`
