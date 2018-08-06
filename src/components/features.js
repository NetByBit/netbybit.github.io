import React from 'react'
import { Row, Col } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Section from './ui/section'

const Features = ({ locale }) => (
  <StaticQuery
    query={graphql`
      query FeaturesQuery {
        en: contentfulFeatures(node_locale: { eq: "en-US" }) {
          title
          responsiveTitle
          responsiveDescription
          responsiveImage {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        ar: contentfulFeatures(node_locale: { eq: "ar" }) {
          title
          responsiveTitle
          responsiveDescription
          responsiveImage {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const langData = locale === 'ar' ? data.ar : data.en

      return (
        <Section className="standard-picture" id="features" title={langData.title}>
          <Row>
            <Col md>
              <div className="list-info">
                <h3 className="section-head mb-4">{langData.responsiveTitle}</h3>
                <p className="section-desc">{langData.responsiveDescription}</p>
              </div>
            </Col>
            <Col md>
              <Img
                fluid={langData.responsiveImage.fluid}
                className="img-fluid center-block standard-image"
              />
            </Col>
          </Row>
        </Section>
      )
    }}
  />
)

export default Features
