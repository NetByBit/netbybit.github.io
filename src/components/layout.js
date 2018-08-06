import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './navbar'

const Layout = ({ locale, children }) => {
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          en: contentfulSeo(node_locale: { eq: "en-US" }) {
            title
            description
          }
          ar: contentfulSeo(node_locale: { eq: "ar" }) {
            title
            description
          }
        }
      `}
      render={data => {
        const langData = locale === 'ar' ? data.ar : data.en

        return (
          <>
            <Helmet>
              <title>{langData.title}</title>
              <meta name="description" content={langData.description} />
              <html lang={locale} dir={dir} />
            </Helmet>
            <Navbar locale={locale} />
            {children}
          </>
        )
      }}
    />
  )
}

Layout.propTypes = {
  locale: PropTypes.oneOf(['en-US', 'ar']).isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
