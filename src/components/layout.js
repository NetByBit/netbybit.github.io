import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { translate } from 'react-i18next'

import Navbar from './navbar'

const Layout = ({ t, i18n, children }) => {
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  return (
    <>
      <Helmet
        title={t('title')}
        meta={[
          {
            name: 'description',
            content: t('data.site.siteMetadata.description'),
          },
          // { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div dir={dir}>
        <Navbar />
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default translate('seo')(Layout)
