import React from 'react'

import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
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
        <div className="row">
          <div className="col-md-4">
            <h4>Social Media</h4>
            <p className="text-muted">{data.contentfulSocialMedia.subtitle}</p>
          </div>
          <div className="col-md-4 ml-auto">
            <a href={data.contentfulSocialMedia.facebookLink}>
              <Icon className="fa-facebook-f" />
            </a>
            <a href={data.contentfulSocialMedia.instagramLink}>
              <Icon className="fa-instagram" />
            </a>
            <a href={data.contentfulSocialMedia.githubLink}>
              <Icon className="fa-github" />
            </a>
          </div>
        </div>
      </Section>
    )}
  />
)

export default SocialMedia
