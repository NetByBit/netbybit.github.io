import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { HelmetDatoCms } from 'gatsby-source-datocms'
import Navbar from './navbar'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteSEOQuery {
        datoCmsSite {
          name
        }
        datoCmsSeoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
    `}
    render={data => (
      <>
        <HelmetDatoCms seo={data.datoCmsSeoMetaTags}>
          <title>{data.datoCmsSite.name}</title>
        </HelmetDatoCms>
        <Navbar />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
