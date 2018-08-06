import React from 'react'

import chunck from 'lodash/chunk'
import { Row, Col } from 'reactstrap'
import { graphql } from 'gatsby'

import Section from './ui/section'

const Icon = ({ className }) => <i className={`colored ${className}`} />

const icons = [
  'devicon-html5-plain',
  'devicon-css3-plain',
  'devicon-javascript-plain',
  'devicon-laravel-plain',
  'devicon-sass-original',
  'devicon-react-original',
]

const WhyUs = ({ data }) => (
  <Section className="sublist" id="why">
    <Row>
      <Col md>
        <div className="list-info">
          <h3 className="h1 section-head head-border text-uppercase">
            {data.title}
          </h3>
          <p className="section-desc">{data.description}</p>
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

export const whyUsFragment = graphql`
  fragment WhyUs on ContentfulWhyUs {
    title
    description
  }
`
