import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { translate } from 'react-i18next'

import Navbar from './navbar'

const Layout = ({ i18n, children }) => {
  const dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  console.log(i18n.language)
  return (
    <>
      <Helmet
        title={t('seo:title')}
        meta={[
          {
            name: 'description',
            content: t('seo:description'),
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
