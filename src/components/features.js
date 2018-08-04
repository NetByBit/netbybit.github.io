import React from 'react'

import { Row, Col } from 'reactstrap'
import { translate } from 'react-i18next'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Responsive from '../img/web-design-min.jpg'
import Section from './ui/section'

const Features = ({ t }) => (
  <StaticQuery
    query={graphql`
      query FeaturesQuery {
        responsive: file(relativePath: { eq: "web-design-min.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Section className="standard-picture" id="features" title={t('title')}>
        <Row>
          <Col md>
            <div className="list-info">
              <h3 className="section-head mb-4">{t('responsive')}</h3>
              <p className="section-desc">{t('responsive-description')}</p>
            </div>
          </Col>
          <Col md>
            <Img
              fluid={data.responsive.childImageSharp.fluid}
              className="img-fluid center-block standard-image"
            />
          </Col>
        </Row>
      </Section>
    )}
  />
)

export default translate('features')(Features)
