import React, { Component } from 'react'

import ScrollIntoView from 'react-scroll-into-view'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  Container,
} from 'reactstrap'
import { translate } from 'react-i18next'

import LanguageSwitcher from './language-switcher'

class MyNavbar extends Component {
  state = {
    isOpen: false,
    scrolled: false,
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ scrolled: !isTop })
      }
    })
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const scrolled = this.state.scrolled ? 'scrolled' : ''
    const { t, i18n } = this.props
    const marginDir = i18n.language === 'ar' ? 'mr-auto' : 'ml-auto'
    return (
      <Navbar
        color="dark"
        dark
        expand="md"
        fixed="top"
        className={scrolled}
        onScroll={this.handleScroll}
      >
        <Container>
          <NavbarBrand href="javascript:void(0)" className="text-uppercase">
            <ScrollIntoView selector="#header">
              Net
              <span className="text-primary">By</span>
              Bit
            </ScrollIntoView>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className={marginDir} navbar>
              <NavItem>
                <NavLink>
                  <ScrollIntoView selector="#why">{t('why-us')}</ScrollIntoView>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <ScrollIntoView selector="#features">
                    {t('features')}
                  </ScrollIntoView>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  {t('hire-us')}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="https://www.fiverr.com/mostadawood">
                    Fiverr
                  </DropdownItem>
                  <DropdownItem href="https://www.freelancer.com/u/MostafaDaoud">
                    Freelancer
                  </DropdownItem>
                  <DropdownItem href="https://www.upwork.com/freelancers/~011ed407c20ef1c7b0">
                    Upwork
                  </DropdownItem>
                  <DropdownItem href="https://www.peopleperhour.com/freelancer/mostafa/web-designer/1774022">
                    peopleperhour
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink>
                  <ScrollIntoView selector="#contact">{t('contact')}</ScrollIntoView>
                </NavLink>
              </NavItem>
              <LanguageSwitcher />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
export default translate('navbar')(MyNavbar)
