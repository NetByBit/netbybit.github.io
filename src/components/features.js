import React from 'react'
import Responsive from '../img/web-design-min.jpg'
import Section from './ui/section'

const Features = () => (
  <Section className="standard-picture" id="features" title="Features">
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
  </Section>
)

export default Features
