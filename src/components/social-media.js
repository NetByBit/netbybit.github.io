import React from 'react'

import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'reactstrap'

import Section from './ui/section'

const Icon = styled.i.attrs({
  className: 'fab fa-3x fa-fw',
})``

const SocialMedia = () => (
  <StaticQuery
    query={graphql`
      query SocialMediaQuery {
        contentfulSocialMedia {
          subtitle
          facebookLink
          instagramLink
          githubLink
        }
      }
    `}
    render={data => (
      <Section className="social-section">
        <Row>
          <Col md="4">
            <h4>Social Media</h4>
            <p className="text-muted">{data.contentfulSocialMedia.subtitle}</p>
          </Col>
          <Col md="4" className="ml-auto">
            <a href={data.contentfulSocialMedia.facebookLink}>
              <Icon className="fa-facebook-f" />
            </a>
            <a href={data.contentfulSocialMedia.instagramLink}>
              <Icon className="fa-instagram" />
            </a>
            <a href={data.contentfulSocialMedia.githubLink}>
              <Icon className="fa-github" />
            </a>
          </Col>
        </Row>
      </Section>
    )}
  />
)

export default SocialMedia
