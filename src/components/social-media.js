import React from 'react'

import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Icon = styled.i.attrs({
  className: 'fab fa-3x fa-fw',
})``

const SocialMedia = () => (
  <StaticQuery
    query={graphql`
      query SocialMediaQuery {
        datoCmsSocialMediaSection {
          subtitle
          facebookLink
          instagramLink
          githubLink
        }
      }
    `}
    render={data => (
      <div className="social-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Social Media</h4>
              <p className="text-muted">
                {data.datoCmsSocialMediaSection.subtitle}
                Follow us on different social platforms and see our work
              </p>
            </div>
            <div className="col-md-4 ml-auto">
              <a href={data.datoCmsSocialMediaSection.facebookLink}>
                <Icon className="fa-facebook-f" />
              </a>
              <a href={data.datoCmsSocialMediaSection.instagramLink}>
                <Icon className="fa-instagram" />
              </a>
              <a href={data.datoCmsSocialMediaSection.githubLink}>
                <Icon className="fa-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)

export default SocialMedia
