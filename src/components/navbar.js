import React from 'react'

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div className="container">
      <a className="navbar-brand text-uppercase" href="#">
        Web<span className="text-primary">Point</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#axit-nav"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="axit-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" data-value="why" href="#">
              Why Us?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-value="features" href="#">
              Features
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hire Us
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a
                className="dropdown-item"
                href="https://www.fiverr.com/mostadawood"
              >
                Fiverr
              </a>
              <a
                className="dropdown-item"
                href="https://www.freelancer.com/u/MostafaDaoud"
              >
                Freelancer
              </a>
              <a
                className="dropdown-item"
                href="https://www.upwork.com/freelancers/~011ed407c20ef1c7b0"
              >
                Upwork
              </a>
              <a
                className="dropdown-item"
                href="https://www.peopleperhour.com/freelancer/mostafa/web-designer/1774022"
              >
                peopleperhour
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-value="contact" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar