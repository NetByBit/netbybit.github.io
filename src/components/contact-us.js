import React from 'react'
import Section from './ui/section'
import styled from 'styled-components'

const Input = styled.input.attrs({ className: 'form-control input-lg' })``

const ContactUs = () => (
  <Section
    className="contact-us"
    id="contact"
    title="Contact us"
    description="If you have any questions feel free to email us"
  >
    <form
      className="contact"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className="row">
        <div className="col-md-6">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <Input type="email" name="email" placeholder="Your e-mail" required />
          <Input
            className="form-control input-lg"
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="col-md-6">
          <textarea
            className="form-control input-lg"
            placeholder="Enter your message here"
            name="message"
          />
        </div>
      </div>
      <button className="btn btn-primary mt-md-3 mt-5">Send Message</button>
    </form>
  </Section>
)

export default ContactUs
