import React, { Component } from 'react'

import Logo from '../static/img/Logo.svg'
import menu from '../static/img/menu.svg'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">
            <img className="img-fluid" src={Logo} />
            NetByBit
          </a>
          <a href="#" className="menu">
            <img src={menu} />
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar
