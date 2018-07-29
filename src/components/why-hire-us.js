import React from 'react'

const WhyHireUs = () => (
  <div className="awesome text-center section">
    <div className="container">
      <h2 className="section-head h1 head-border-center text-uppercase">
        Why To Hire Us!?
      </h2>
      <p className="section-desc">
        You're not 100% sure we are the right people to Hire?<br />
        <span className="text-primary">We Offer! </span>{' '}
      </p>
      <div className="row">
        <div className="col-md feat-box">
          <i className="far fa-lightbulb fa-3x" />
          <h3 className="feat-head">Thoughtful Design</h3>
          <p className="text-muted">
            We Design Fresh ideas, and always work on OUT-OF-THE-BOX designs to
            satisfy our customer!
          </p>
        </div>
        <div className="col-md feat-box">
          <i className="far fa-keyboard fa-2x" />
          <h3 className="feat-head">Well Crafted</h3>
          <p className="text-muted">
            We write every single code ourselves to make sure it runs like
            intended!
          </p>
        </div>
        <div className="col-md feat-box">
          <i className="fas fa-bolt fa-3x" />
          <h3 className="feat-head">Easy To Customize</h3>
          <p className="text-muted">
            You could customize your page the way you want it and we will code
            it for you!{' '}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default WhyHireUs
