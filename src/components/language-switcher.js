import React from 'react'

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { Link } from 'gatsby'

const LanguageSwitcher = ({ locale }) => {
  const languages = [
    { code: 'en', label: 'English', link: '/' },
    { code: 'ar', label: 'العربية', link: '/ar' },
  ]

  return (
    <UncontrolledDropdown>
      <DropdownToggle nav caret>
        {locale}
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

export default LanguageSwitcher
