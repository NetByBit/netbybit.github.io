import React from 'react'
import Responsive from '../img/web-design-min.jpg'

const Features = () => (
  <div className="standard-picture section" id="features">
    <div className="container">
      <h2 className="text-center h1 head-border-center text-uppercase">
        Features
      </h2>
      <div className="row">
        <div className="col-md">
          <div className="list-info">
            <h3 className="section-head mb-4">Responsive Design</h3>
            <p className="section-desc">
              We develop your site taking every screen size into consideration,
              from small screen phones upto large TV screens!
            </p>
          </div>
        </div>
        <div className="col-md">
          <img
            className="img-fluid center-block standard-image"
            src={Responsive}
            alt="Responsive design"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Features