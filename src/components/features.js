import React from 'react'

import { Row, Col } from 'reactstrap'

import Responsive from '../img/web-design-min.jpg'
import Section from './ui/section'

const Features = () => (
  <Section className="standard-picture" id="features" title="Features">
    <Row>
      <Col md>
        <div className="list-info">
          <h3 className="section-head mb-4">Responsive Design</h3>
          <p className="section-desc">
            We develop your site taking every screen size into consideration,
            from small screen phones upto large TV screens!
          </p>
        </div>
      </Col>
      <Col md>
        <img
          className="img-fluid center-block standard-image"
          src={Responsive}
          alt="Responsive design"
        />
      </Col>
    </Row>
  </Section>
)

export default Features
