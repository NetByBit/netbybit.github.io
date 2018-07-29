import React from 'react'

const ContactUs = () => (
  <div className="contact-us section" id="contact">
    <div className="container">
      <h2 className="section-head h1 head-border-center text-uppercase text-center">
        Contact us
      </h2>
      <p className="section-desc text-center">
        If you have any questions feel free to email us
      </p>
      <form
        className="contact"
        action="https://formspree.io/mostadawood@gmail.com"
        method="POST"
      >
        <div className="row">
          <div className="col-md-6">
            <input
              className="form-control input-lg"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="form-control input-lg"
              type="email"
              name="email"
              placeholder="Your e-mail"
              required
            />
            <input
              className="form-control input-lg"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <input
              type="hidden"
              name="_subject"
              value="Webpoint form submission!"
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
        <button className="btn btn-primary mt-md-3 mt-5" type="submit">
          Send Message
        </button>
      </form>
    </div>
  </div>
)

export default ContactUs