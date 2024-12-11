import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
  return (
    <div className="about-us">
      <header className="bg-dark text-white py-5">
        <Container>
          <h1 className="text-center">About Us</h1>
          <p className="text-center">
            We are committed to monitoring unauthorized construction and providing efficient solutions to ensure compliance.
          </p>
        </Container>
      </header>

      <Container className="my-5">
        <Row className="text-center mb-4">
          <Col>
            <h2>Our Mission</h2>
            <p>
              Our mission is to create a safe, compliant environment by identifying unauthorized construction activities 
              and enabling responsible urban development.
            </p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <h3>Innovation</h3>
                <p> 
                Innovation lies at the heart of our platform, revolutionizing how unauthorized construction activities are monitored and reported. 
                By integrating cutting-edge technologies like real-time tracking, AI-driven analysis, and user-friendly interfaces, we empower citizens to take an active role in urban governance. 
                Our data-driven insights enable authorities to act swiftly, while collaborative features bridge the gap between communities and planners. 
                Designed with scalability in mind, our platform adapts to evolving urban challenges, promoting transparency and accountability. 
                Beyond technology, our emphasis on eco-friendly practices and sustainable development showcases our commitment to building smarter, greener cities for future generations. Innovation drives our vision forward.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <h3>Transparency</h3>
                <p>
                Transparency is the cornerstone of our platform, ensuring accountability and trust at every level. 
                By providing clear, real-time access to reported data, we empower citizens to stay informed about ongoing construction activities and their status. 
                Our system ensures that reports are processed openly, with updates shared promptly with all stakeholders. 
                Collaboration with authorities is guided by honesty, making every decision visible and traceable. 
                With secure data handling and unbiased information dissemination, we foster an environment where both communities and policymakers can work together effectively.
                Through transparency, we aim to build trust, strengthen civic engagement, and promote ethical urban development practices.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <h3>Integrity</h3>
                <p>
                Integrity is the foundation of our platform, guiding every decision and action we take. We are committed to upholding the highest ethical standards in monitoring and reporting unauthorized construction activities. 
                Our platform ensures that all information shared is accurate, unbiased, and verified, fostering trust among users and stakeholders. 
                By prioritizing honesty and accountability, we create a system that empowers citizens and authorities to address issues with confidence. 
                Integrity drives our commitment to fairness, ensuring that every report is handled with diligence and without prejudice. 
                Through our steadfast principles, we aim to inspire a culture of responsibility and ethical urban development.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center">Meet Our Team</h2>
          <Row className="text-center mt-4">
            <Col md={4}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="rounded-circle mb-3"
              />
              <h5>ARYAN RAJ</h5>
              <p>Frontend Developer</p>
            </Col>

            <Col md={4}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="rounded-circle mb-3"
              />
              <h5>ARCHEE SINHA</h5>
              <p>Frontend Developer</p>
            </Col>

            <Col md={4}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="rounded-circle mb-3"
              />
              <h5>ANUBHA</h5>
              <p>UI/UX Developer</p> 
            </Col>
            <Col md={4}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 4"
                className="rounded-circle mb-3"
              />
              <h5>ARYAN GUSAIN</h5>
              <p>Backend Developer</p>
            </Col>

            <Col md={4}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 5"
                className="rounded-circle mb-3"
              />
              <h5>ATHARV</h5>
              <p>Backend Developer</p>
            </Col>

            <Col md={4}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 6"
                className="rounded-circle mb-3"
              />
              <h5>ARYAN SINGH</h5>
              <p>Research and Backend Developer</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default AboutUs;

