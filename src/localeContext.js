import React from 'react'

const LocaleContext = React.createContext()

export default LocaleContext

export const withLocale = Component => {
  return props => (
    <LocaleContext.Consumer>
      {locale => <Component {...props} locale={locale} />}
    </LocaleContext.Consumer>
  )
}
