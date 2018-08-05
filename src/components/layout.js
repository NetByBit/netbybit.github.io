import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { translate } from 'react-i18next'

import Navbar from './navbar'

const Layout = ({ i18n, t, children }) => {
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="google-site-verification" content="fsB3nFriPOvHe9YQuLMCUPq8actppq0LKN2K8Bzwzcg" />
      </Helmet>
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
