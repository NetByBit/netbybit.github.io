import React from 'react'

import { Row, Col, Input, Button, Form } from 'reactstrap'

import Section from './ui/section'

const ContactUs = () => (
  <Section
    className="contact-us"
    id="contact"
    title="Contact us"
    description="If you have any questions feel free to email us"
  >
    <Form
      className="contact"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Row>
        <Col md>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            bsSize="lg"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your e-mail"
            bsSize="lg"
            required
          />
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            bsSize="lg"
            required
          />
        </Col>
        <Col md>
          <Input
            bsSize="lg"
            type="textarea"
            placeholder="Enter your message here"
            name="message"
          />
        </Col>
      </Row>
      <Button color="primary" className="mt-md-3 mt-5">
        Send Message
      </Button>
    </Form>
  </Section>
)

export default ContactUs
