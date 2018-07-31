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

  scrollToContent = content => {
    switch (content) {
      case 'whyUs':
        console.log(this.props.compRefs.whyUs.current)
        this.props.compRefs.whyUs.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 2:
        this.section2.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const scrolled = this.state.scrolled ? 'scrolled' : ''
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
              Web
              <span className="text-primary">Point</span>
            </ScrollIntoView>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <ScrollIntoView selector="#why">Why Us?</ScrollIntoView>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <ScrollIntoView selector="#features">Features</ScrollIntoView>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  Hire Us
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
                  <ScrollIntoView selector="#contact">Contact</ScrollIntoView>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
export default MyNavbar
