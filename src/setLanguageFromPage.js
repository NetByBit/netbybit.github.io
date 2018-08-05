import React from 'react'
import PropTypes from 'prop-types'
import i18n from './i18n'

/**
 * @returns {React.PureComponent} Component with locales as proptypes
 */
export default function setLanguageFromPage() {
  return WrappedComponent =>
    class extends React.PureComponent {
      static propTypes = {
        pathContext: PropTypes.shape({
          language: PropTypes.string.isRequired,
        }),
      }

      componentDidMount() {
        const currentLanguage = i18n.language
        const pageLanguage = this.props.pageContext.locale

        // First request
        if (!currentLanguage) {
          i18n.language = pageLanguage
        }

        // Only update on language change
        if (currentLanguage !== pageLanguage) {
          i18n.changeLanguage(pageLanguage)
        }
      }

      componentDidUpdate() {
        const currentLanguage = i18n.language
        const pageLanguage = this.props.pageContext.locale

        // First request
        if (!currentLanguage) {
          i18n.language = pageLanguage
        }

        // Only update on language change
        if (currentLanguage !== pageLanguage) {
          i18n.changeLanguage(pageLanguage)
        }
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    }
}
