import React from 'react'

import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        datoCmsHeader {
          description
          subtitle
          backgroundImage {
            fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className="header">
        <Img fluid={data.datoCmsHeader.backgroundImage.fluid} imgStyle={{objectFit: 'cover', objectPosition: 'top center'}} />
        <div className="overlay">
          <div className="container">
            <div className="row centering-vh">
              <div className="col-md-8 col-lg-6">
                <h1 className="text-uppercase text-md-left text-center">
                  Web<span className="text-primary">Point</span>
                </h1>
                <p className="lead text-uppercase text-md-left text-center">
                  {data.datoCmsHeader.description}
                </p>
                <p className="text-md-left text-center">
                  {data.datoCmsHeader.subtitle}
                </p>
                <a
                  href="https://web-point.github.io/Template-2/"
                  className="btn btn-outline-light d-block d-md-inline-block mt-md-3 mt-5"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)

export default Header
