import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { translate } from 'react-i18next'

import Navbar from './navbar'

const Layout = ({ i18n, children }) => {
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              // { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <div dir={dir}>
            <Navbar />
            {children}
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default translate()(Layout)
