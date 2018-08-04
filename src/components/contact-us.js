import React from 'react'

import { Row, Col, Input, Button, Form } from 'reactstrap'
import { translate } from 'react-i18next'

import Section from './ui/section'

const ContactUs = ({ t }) => (
  <Section
    className="contact-us"
    id="contact"
    title={t('title')}
    description={t('description')}
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
            placeholder={t('name-placeholder')}
            bsSize="lg"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder={t('email-placeholder')}
            bsSize="lg"
            required
          />
          <Input
            type="text"
            name="subject"
            placeholder={t('subject-placeholder')}
            bsSize="lg"
            required
          />
        </Col>
        <Col md>
          <Input
            bsSize="lg"
            type="textarea"
            placeholder={t('message-placeholder')}
            name="message"
          />
        </Col>
      </Row>
      <Button color="primary" className="mt-md-3 mt-5">
        {t('send')}
      </Button>
    </Form>
  </Section>
)

export default translate('contact')(ContactUs)
