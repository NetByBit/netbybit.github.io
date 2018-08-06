import React from 'react'

import { Row, Col, Input, Button, Form } from 'reactstrap'
import { graphql } from 'gatsby'

import Section from './ui/section'

const ContactUs = ({ data }) => (
  <Section
    className="contact-us"
    id="contact"
    title={data.title}
    description={data.description}
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
            placeholder={data.namePlaceholder}
            bsSize="lg"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder={data.emailPlaceholder}
            bsSize="lg"
            required
          />
          <Input
            type="text"
            name="subject"
            placeholder={data.subjectPlaceholder}
            bsSize="lg"
            required
          />
        </Col>
        <Col md>
          <Input
            bsSize="lg"
            type="textarea"
            placeholder={data.messagePlaceholder}
            name="message"
          />
        </Col>
      </Row>
      <Button color="primary" className="mt-md-3 mt-5">
        {data.send}
      </Button>
    </Form>
  </Section>
)

export default ContactUs

export const contactUsFragment = graphql`
  fragment ContactUs on ContentfulContact {
    title
    description
    namePlaceholder
    emailPlaceholder
    subjectPlaceholder
    messagePlaceholder
    send
  }
`
