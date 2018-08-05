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
    { code: 'en', label: 'English', link: '/' },
    { code: 'ar', label: 'العربية', link: '/ar' },
  ]

  return (
    <UncontrolledDropdown>
      <DropdownToggle nav caret>
        {i18n.language}
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
