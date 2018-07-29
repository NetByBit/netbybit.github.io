import React from 'react'

import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

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
                fixed(width: 280, height:280) {
                  ...GatsbyContentfulFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="our-team section" id="our-team">
        <div className="container">
          <h2 className="h1 head-border-center text-uppercase text-center">
            Our Team
          </h2>
          <div className="row justify-content-around">
            {data.allContentfulMember.edges.map(({ node }) => (
              <div className="col-md-5 person text-center">
                <div className="row justify-content-md-center">
                  <div className="col-md-8">
                    <Img fixed={node.image.fixed} imgStyle={{maxWidth: "100%", height: "auto"}} />
                    {/* <img src={Mostafa} alt="Mostafa" className="img-fluid" /> */}
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
        </div>
      </div>
    )}
  />
)

export default OurTeam
