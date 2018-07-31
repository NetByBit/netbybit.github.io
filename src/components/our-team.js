import React from 'react'

import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Section from './ui/section'

const OurTeam = () => (
  <StaticQuery
    query={graphql`
      query TeamQuery {
        allContentfulMember {
          edges {
            node {
              id
              name
              facebookLink
              githubLink
              image {
                fixed(width: 280, height: 280) {
                  ...GatsbyContentfulFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section className="our-team section" id="our-team" title="Our Team">
        <div className="row justify-content-around">
          {data.allContentfulMember.edges.map(({ node }) => (
            <div className="col-md-5 person text-center">
              <div className="row justify-content-md-center">
                <div className="col-md-8">
                  <Img
                    fixed={node.image.fixed}
                    imgStyle={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </div>
              <h2>{node.name}</h2>
              <div className="icons">
                <a href="https://github.com/MostaDaoud">
                  <i className="fab fa-github fa-3x fa-fw" />
                </a>
                <a href="https://www.facebook.com/MOSTA.DAOUD">
                  <i className="fab fa-facebook-f fa-3x fa-fw" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    )}
  />
)

export default OurTeam
