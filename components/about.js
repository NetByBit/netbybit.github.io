import React from 'react'

import welcomeImg from '../static/img/welcome-section.jpg'

const about = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md about-left">
              <div className="vertical-text">
                <h5 className="vertical-text text-uppercase">Who we are</h5>
                <h2>
                  A <strong>Story</strong>
                  <br /> About Us
              </h2>
              </div>
            </div>
            <div className="col-md about-right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            </div>
          </div>
          <div className='img'>
            <img src={welcomeImg} className='img-fluid' />
          </div>
        </div>
      </div>
      <div className='about-2'>
        <div className='container'>
          <div className='cards row'>
            <div className='card col-md text-center'>
              <i class="fab fa-font-awesome-flag fa-3x"></i>
              <h3>Mission</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eos asperiores nobis molestias nam. Ex quos dicta as.</p>
            </div>
            <div className='card col-md text-center'>
              <i class="fas fa-eye fa-3x"></i>
              <h3>Vision</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eos asperiores nobis molestias nam. Ex quos dicta as.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default about
