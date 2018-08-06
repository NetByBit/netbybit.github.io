import React from 'react'
import { Row, Col } from 'reactstrap'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Section from './ui/section'

const Features = ({ data }) => (
  <Section className="standard-picture" id="features" title={data.title}>
    <Row>
      <Col md>
        <div className="list-info">
          <h3 className="section-head mb-4">{data.responsiveTitle}</h3>
          <p className="section-desc">{data.responsiveDescription}</p>
        </div>
      </Col>
      <Col md>
        <Img
          fluid={data.responsiveImage.fluid}
          className="img-fluid center-block standard-image"
        />
      </Col>
    </Row>
  </Section>
)

export default Features

export const featuresFragment = graphql`
  fragment Features on ContentfulFeatures {
    title
    responsiveTitle
    responsiveDescription
    responsiveImage {
      fluid(maxWidth: 600) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`
