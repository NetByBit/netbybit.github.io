import React from 'react'
import { Row, Col } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'

import Section from './ui/section'

const Icon = ({ className }) => <i className={`fab fa-3x fa-fw ${className}`} />

const SocialMedia = ({ locale }) => {
  const marginDir = locale === 'ar' ? 'mr-auto' : 'ml-auto'

  return (
    <StaticQuery
      query={graphql`
        query SocialMediaQuery {
          en: contentfulSocialMedia(node_locale: { eq: "en-US" }) {
            title
            subtitle
            githubLink
            instagramLink
            facebookLink
          }
          ar: contentfulSocialMedia(node_locale: { eq: "ar" }) {
            title
            subtitle
            githubLink
            instagramLink
            facebookLink
          }
        }
      `}
      render={data => {
        const langData = locale === 'ar' ? data.ar : data.en

        return (
          <Section className="social-section">
            <Row>
              <Col md="4">
                <h4>{langData.title}</h4>
                <p className="text-muted">{langData.subtitle}</p>
              </Col>
              <Col md="4" className={marginDir}>
                <a href={langData.facebookLink}>
                  <Icon className="fa-facebook-f" />
                </a>
                <a href={langData.instagramLink}>
                  <Icon className="fa-instagram" />
                </a>
                <a href={langData.githubLink}>
                  <Icon className="fa-github" />
                </a>
              </Col>
            </Row>
          </Section>
        )
      }}
    />
  )
}

export default SocialMedia
