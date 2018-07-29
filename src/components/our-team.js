import React from 'react'

import Mostafa from '../img/Mostafa.jpg'
import Amr from '../img/Amr.jpg'

const OurTeam = () => (
  <div className="our-team section" id="our-team">
    <div className="container">
      <h2 className="h1 head-border-center text-uppercase text-center">
        Our Team
      </h2>
      <div className="row justify-content-around">
        <div className="col-md-5 person text-center">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <img src={Mostafa} alt="Mostafa" className="img-fluid" />
            </div>
          </div>
          <h2>Mostafa Nasser Daoud</h2>
          <div className="icons">
            <a href="https://github.com/MostaDaoud">
              <i className="fab fa-github fa-3x fa-fw" />
            </a>
            <a href="https://www.facebook.com/MOSTA.DAOUD">
              <i className="fab fa-facebook-f fa-3x fa-fw" />
            </a>
          </div>
        </div>
        <div className="col-md-5 person text-center">
          <div className="row justify-content-md-center">
            <div className="col-md-8">
              <img src={Amr} alt="Amr" className="img-fluid" />
            </div>
          </div>
          <h2>Amr A.Mohammed</h2>
          <div className="icons">
            <a href="https://github.com/merodiro">
              <i className="fab fa-github fa-3x fa-fw" />
            </a>
            <a href="https://www.facebook.com/mero.diro">
              <i className="fab fa-facebook-f fa-3x fa-fw" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default OurTeam
