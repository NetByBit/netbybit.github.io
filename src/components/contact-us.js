import React from 'react'

import { Row, Col, Input, Button, Form } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'

import Section from './ui/section'

const ContactUs = ({ locale }) => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
        en: contentfulContact(node_locale: { eq: "en-US" }) {
          title
          description
          namePlaceholder
          emailPlaceholder
          subjectPlaceholder
          messagePlaceholder
          send
        }
        ar: contentfulContact(node_locale: { eq: "ar" }) {
          title
          description
          namePlaceholder
          emailPlaceholder
          subjectPlaceholder
          messagePlaceholder
          send
        }
      }
    `}
    render={data => {
      const langData = locale === 'ar' ? data.ar : data.en

      return (
        <Section
          className="contact-us"
          id="contact"
          title={langData.title}
          description={langData.description}
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
                  placeholder={langData.namePlaceholder}
                  bsSize="lg"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder={langData.emailPlaceholder}
                  bsSize="lg"
                  required
                />
                <Input
                  type="text"
                  name="subject"
                  placeholder={langData.subjectPlaceholder}
                  bsSize="lg"
                  required
                />
              </Col>
              <Col md>
                <Input
                  bsSize="lg"
                  type="textarea"
                  placeholder={langData.messagePlaceholder}
                  name="message"
                />
              </Col>
            </Row>
            <Button color="primary" className="mt-md-3 mt-5">
              {langData.send}
            </Button>
          </Form>
        </Section>
      )
    }}
  />
)

export default ContactUs
