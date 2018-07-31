import React from 'react'

import chunck from 'lodash/chunk'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'

import Section from './ui/section'

const Icon = styled.i.attrs({
  className: 'colored',
})``

const icons = [
  'devicon-html5-plain',
  'devicon-css3-plain',
  'devicon-javascript-plain',
  'devicon-laravel-plain',
  'devicon-sass-original',
  'devicon-react-original',
]

const WhyUs = () => (
  <Section className="sublist" id="why">
    <Row>
      <Col md>
        <div className="list-info">
          <h3 className="h1 section-head head-border text-uppercase">
            Why us?
          </h3>
          <p className="section-desc">
            You don't have to overpay a PROFESSIONAL to get your work done, you
            could develop a professional website or landing page using just
            those? check our page to make sure yourself!
          </p>
        </div>
      </Col>
      <Col md className="icons">
        {chunck(icons, 3).map(row => (
          <Row className="text-center" key={row}>
            {row.map(icon => (
              <Col xs="4" key={icon}>
                <Icon className={icon} />
              </Col>
            ))}
          </Row>
        ))}
      </Col>
    </Row>
  </Section>
)

export default WhyUs
