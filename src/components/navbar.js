import React, { Component } from 'react'

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
          <NavbarBrand href="/" className="text-uppercase">
            Web
            <span className="text-primary">Point</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink data-value="why">Why Us?</NavLink>
              </NavItem>
              <NavItem>
                <NavLink data-value="features">Features</NavLink>
              </NavItem>
              <UncontrolledDropdown UncontrolledDropdown>
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
                <NavLink>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
export default MyNavbar
