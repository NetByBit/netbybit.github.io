import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Navbar from './navbar'
import { withLocale } from '../localeContext'

const Layout = ({ data, locale, children, navbarData }) => {
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  return (
    <>
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <html lang={locale} dir={dir} />
      </Helmet>
      <Navbar data={navbarData} />
      {children}
    </>
  )
}

Layout.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default withLocale(Layout)

export const seoFragment = graphql`
  fragment Seo on ContentfulSeo {
    title
    description
  }
`
