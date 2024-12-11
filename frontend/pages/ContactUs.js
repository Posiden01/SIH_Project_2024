import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function ContactUs() {
  return (
    <div className="contactus-container">
      <Container className="my-5">
        {/* Page Heading */}
        <Row className="mb-4">
          <Col>
            <h1 className="text-center">Contact Us</h1>
            <p className="text-center">
              Have questions or need assistance? Reach out to us through the form below, or use our contact details.
            </p>
          </Col>
        </Row>

        {/* Contact Form Section */}
        <Row className="mb-5">
          <Col md={6}>
            <h3>Send Us a Message</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter the subject" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          {/* Contact Details Section */}
          <Col md={6}>
            <h3>Contact Details</h3>
            <p>
              <strong>Office Address:</strong><br />
              1234 Construction Monitoring Road,<br />
              Sector-5, City Name, State, ZIP Code
            </p>
            <p>
              <strong>Phone:</strong> +91 9876543210<br />
              <strong>Email:</strong> support@constructionmonitoring.com
            </p>
            <p>
              <strong>Office Hours:</strong><br />
              Monday to Friday: 9:00 AM - 5:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </Col>
        </Row>

        {/* Map Section */}
        <Row>
          <Col>
            <h3 className="text-center mb-4">Find Us Here</h3>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.4567637197!2d77.188324!3d28.645441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc4d728b6cfd%3A0x100ac889bce8a4d5!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1699443642824!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
