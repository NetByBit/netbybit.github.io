import React from 'react'
import Typed from 'react-typed'

const Header = () => (
  <header className="header">
    <div className="video-wrapper">
      <video autoPlay loop muted>
        <source src="/static/videos/out.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="header-overlay" />
    <div className="header-content">
      <div className="container">
      <p className="text-uppercase lead font-weight-bold">We create magnificent websites &amp; marketing them digitally!</p>
      <h1 className="text-uppercase">We Are designers</h1>
      {/* <h1>We Are (designers|developers|marketers|NetByBit)</h1> */}
        {/* <Typed
          strings={[
            'Search for products',
            'Search for categories',
            'Search for brands',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        /> */}
      </div>
    </div>
  </header>
)

export default Header
