import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
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
    const { locale } = this.props
    const marginDir = locale === 'ar' ? 'mr-auto' : 'ml-auto'
    return (
      <StaticQuery
        query={graphql`
          query NavbarQuery {
            en: contentfulNavbar(node_locale: { eq: "en-US" }) {
              whyUs
              features
              hireUs
              contact
            }
            ar: contentfulNavbar(node_locale: { eq: "ar" }) {
              whyUs
              features
              hireUs
              contact
            }
          }
        `}
        render={data => {
          const langData = locale === 'ar' ? data.ar : data.en
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
                <NavbarBrand
                  href="javascript:void(0)"
                  className="text-uppercase"
                >
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
                        <ScrollIntoView selector="#why">
                          {langData.whyUs}
                        </ScrollIntoView>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink>
                        <ScrollIntoView selector="#features">
                          {langData.features}
                        </ScrollIntoView>
                      </NavLink>
                    </NavItem>
                    <UncontrolledDropdown>
                      <DropdownToggle nav caret>
                        {langData.hireUs}
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
                        <ScrollIntoView selector="#contact">
                          {langData.contact}
                        </ScrollIntoView>
                      </NavLink>
                    </NavItem>
                    <LanguageSwitcher locale={locale} />
                  </Nav>
                </Collapse>
              </Container>
            </Navbar>
          )
        }}
      />
    )
  }
}
export default MyNavbar
