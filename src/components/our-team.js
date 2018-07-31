import React from 'react'

import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'reactstrap'

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
        <Row className="justify-content-around">
          {data.allContentfulMember.edges.map(({ node }) => (
            <Col md="5" className="person text-center" key={node.id}>
              <Row className="justify-content-md-center">
                <Col md="8" className="col-md-8">
                  <Img
                    fixed={node.image.fixed}
                    imgStyle={{ maxWidth: '100%', height: 'auto' }}
                  />
                </Col>
              </Row>
              <h2>{node.name}</h2>
              <div className="icons">
                <a href="https://github.com/MostaDaoud">
                  <i className="fab fa-github fa-3x fa-fw" />
                </a>
                <a href="https://www.facebook.com/MOSTA.DAOUD">
                  <i className="fab fa-facebook-f fa-3x fa-fw" />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Section>
    )}
  />
)

export default OurTeam
