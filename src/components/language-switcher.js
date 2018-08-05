import React, { Component } from 'react'

import { translate } from 'react-i18next'

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { Link } from 'gatsby'

const LanguageSwitcher = ({ i18n }) => {
  const languages = [
    { code: 'en-US', label: 'English', shortname: 'en', link: '/' },
    { code: 'ar', label: 'العربية', shortname: 'ar', link: '/ar' },
  ]

  return (
    <UncontrolledDropdown>
      <DropdownToggle nav caret>
        {languages.find(lang => lang.code === i18n.language).shortname}
      </DropdownToggle>
      <DropdownMenu>
        {languages.map(({ code, label, link }) => (
          <DropdownItem key={code} tag={Link} to={link}>
            {label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default translate()(LanguageSwitcher)
