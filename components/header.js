import React from 'react'
import Typed from 'react-typed'

import background from '../static/img/adult-attractive-beautiful-1181545.jpg'

const Header = () => (
  <header className="header">
    <div className="image-wrapper">
      <img src={background} />
    </div>
    <div className="header-overlay" />
    <div className="header-content">
      <div className="container">
        <p className="text-uppercase lead font-weight-bold">We create magnificent websites &amp; marketing them digitally!</p>
        {/* <h1 className="text-uppercase">We Are designers</h1> */}
        {/* <h1>We Are (designers|developers|marketers|NetByBit)</h1> */}
        <h1>We Are {' '}
          <span>

            {/* <Typed
            strings={[
              'Designers',
              'Developers',
              'Marketers',
              'NetByBit',
            ]}
            typeSpeed={60}
            backSpeed={60}
            loop
            smartBackspace={false}
            /> */}
          </span>
        </h1>
      </div>
    </div>
  </header>
)

export default Header
