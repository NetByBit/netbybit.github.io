import React from 'react'
import Section from './ui/section'

const Feature = ({ icon, title, description }) => (
  <div className="col-md feat-box">
    <i className={'fa-2x ' + icon} />
    <h3 className="feat-head">{title}</h3>
    <p className="text-muted">{description}</p>
  </div>
)

const WhyHireUs = () => (
  <Section
    className="awesome text-center"
    title="Why To Hire Us!?"
    description={
      <>
        You're not 100% sure we are the right people to Hire?
        <br />
        <span className="text-primary">We Offer!</span>
      </>
    }
  >
    <div className="row">
      <Feature
        icon="far fa-lightbulb"
        title="Thoughtful Design"
        description="We Design Fresh ideas, and always work on OUT-OF-THE-BOX designs to
          satisfy our customer!"
      />
      <Feature
        icon="far fa-keyboard"
        title="Well Crafted"
        description="We write every single code ourselves to make sure it runs like
        intended!"
      />
      <Feature
        icon="fas fa-bolt"
        title="Easy To Customize"
        description="You could customize your page the way you want it and we will code it
        for you!"
      />
    </div>
  </Section>
)

export default WhyHireUs
