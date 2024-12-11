import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Report() {
  return (
    <div className="report-container">
      <Container className="my-5">
        {/* Page Heading */}
        <Row className="mb-4">
          <Col>
            <h1 className="text-center">Report Unauthorized Construction</h1>
            <p className="text-center">
              Help us monitor unauthorized construction activities by reporting incidents in your area. Your submission is crucial for maintaining transparency and safety.
            </p>
          </Col>
        </Row>

        {/* Reporting Form */}
        <Row>
          <Col md={8} className="mx-auto">
            <Form>
              <Form.Group className="mb-3" controlId="reporterName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="reporterEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="incidentLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter the location of the incident" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="incidentDetails">
                <Form.Label>Details</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Provide details about the construction activity" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="incidentEvidence">
                <Form.Label>Upload Evidence (Optional)</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Submit Report
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Report;
