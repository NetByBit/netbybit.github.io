import React, { Component } from 'react'

import { translate } from 'react-i18next'

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)
    const { i18n } = this.props
    this.state = { language: i18n.language }

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language })
  }

  handleChangeLanguage = (lng) => {
    const { i18n } = this.props
    i18n.changeLanguage(lng)
  }

  renderLanguageChoice({ code, label }) {
    return (
      <DropdownItem key={code} onClick={() => this.handleChangeLanguage(code)}>
        {label}
      </DropdownItem>
    )
  }

  render() {
    const languages = [
      { code: 'en-US', label: 'English', shortname: 'en' },
      { code: 'ar', label: 'العربية', shortname: 'ar' },
    ]

    return (
      <UncontrolledDropdown>
        <DropdownToggle nav caret>
          {languages.find(lang => lang.code === this.state.language).shortname}
        </DropdownToggle>
        <DropdownMenu>
          {languages.map(({ code, label }) => (
            <DropdownItem
              key={code}
              onClick={() => this.handleChangeLanguage(code)}
            >
              {label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

export default translate()(LanguageSwitcher)
