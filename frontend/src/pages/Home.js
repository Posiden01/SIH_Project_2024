import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div className="home-container">
      <Container className="my-5">
        {/* Hero Section */}
        <Row className="mb-5 align-items-center">
          <Col md={6}>
            <h1 className="hero-title">Welcome to Unauthorized Construction Monitoring</h1>
            <p className="hero-description">
              A platform to report and monitor unauthorized construction activities in your area. 
              Join us in making your community safer and more transparent.
            </p>
            <Button variant="primary" size="lg" href="/report">
              Report an Issue
            </Button>
          </Col>
          <Col md={6}>
            <img
              src="https://picsum.photos/500/300"
              alt="Construction Monitoring"
              className="img-fluid"
            />
          </Col>
        </Row>

        {/* Carousel Section */}
        <Row className="mb-5">
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/300"
                  alt="Slide 1"
                />
                <Carousel.Caption>
                  <h3>Real-Time Monitoring</h3>
                  <p>Track unauthorized activities across the city efficiently.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/300"
                  alt="Slide 2"
                />
                <Carousel.Caption>
                  <h3>Secure Access</h3>
                  <p>Login as a user or admin for a personalized experience.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/800/300"
                  alt="Slide 3"
                />
                <Carousel.Caption>
                  <h3>Community Collaboration</h3>
                  <p>Work together to ensure safe and lawful construction practices.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* Features Section */}
        <Row>
          <Col md={4} className="mb-4">
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Real-Time Reporting</Card.Title>
                <Card.Text>
                  Report construction activities in real time and help us maintain transparency.
                </Card.Text>
                <Button variant="primary" href="/report">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Secure Login</Card.Title>
                <Card.Text>
                  Log in or sign up as a user or admin to access exclusive features.
                </Card.Text>
                <Button variant="primary" href="/login-signup">
                  Get Started
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Notice Board</Card.Title>
                <Card.Text>
                  Stay informed with the latest updates and notices related to your area.
                </Card.Text>
                <Button variant="primary" href="/notice-board">
                  View Notices
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Information Section */}
        <Row className="mt-5">
          <Col md={6} className="mb-4">
            <h3>About the Platform</h3>
            <p>
              Unauthorized Construction Monitoring is a collaborative platform designed to 
              address unauthorized construction activities. Citizens can easily report 
              such issues, and authorities can track and respond promptly.
            </p>
            <p>
              Our mission is to ensure lawful and safe construction practices while 
              fostering community participation and transparency.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://picsum.photos/500/300"
              alt="About the Platform"
              className="img-fluid"
            />
          </Col>
        </Row>

        {/* Testimonials Section */}
        <Row className="mt-5">
          <Col>
            <Row className="my-5">
              <Col md={4} className="text-center">
                <h2>120+</h2>
                <p>Unauthorized Constructions Detected</p>
              </Col>
              <Col md={4} className="text-center">
                <h2>95%</h2>
                <p>Reports Resolved</p>
              </Col>
              <Col md={4} className="text-center">
                <h2>500+</h2>
                <p>Active Users</p>
              </Col>
            </Row>

            <Row className="my-5">
              <Col>
                <h3>Latest News</h3>
                <Row>
                  <div className='news-feed-container'>
                    <div className='news-cards'>
                      <Card>
                        <Card.Img variant="top" src="https://picsum.photos/300/200" />
                        <Card.Body>
                          <Card.Title>New Construction Laws Enacted</Card.Title>
                          <Card.Text>
                            Recent updates on urban planning regulations to prevent unauthorized construction.
                          </Card.Text>
                          <Button variant="primary" href="/news">Read More</Button>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Img variant="top" src="https://picsum.photos/300/200" />
                        <Card.Body>
                          <Card.Title>Drone Technology Enhancing Monitoring</Card.Title>
                          <Card.Text>
                            Explore how drones are transforming urban planning and enforcement of construction laws.
                          </Card.Text>
                          <Button variant="primary" href="/news/drone-tech">
                            Read More
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Img variant="top" src="https://picsum.photos/300/200?grayscale" />
                        <Card.Body>
                          <Card.Title>Urban Development Policies 2024</Card.Title>
                          <Card.Text>
                            Insights into the latest policies aimed at regulating urban growth and unauthorized structures.
                          </Card.Text>
                          <Button variant="primary" href="/news/urban-policies">
                            Read More
                          </Button>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Img variant="top" src="https://picsum.photos/300/200/?blur" />
                        <Card.Body>
                          <Card.Title>Community Efforts in Monitoring</Card.Title>
                          <Card.Text>
                            Learn how citizens are coming together to report and resolve unauthorized construction issues.
                          </Card.Text>
                          <Button variant="primary" href="/news/community-efforts">
                            Read More
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>

            <h3 className="text-center mb-4">What People Say</h3>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Card.Text>
                      "This platform has made it so much easier to report and monitor unauthorized construction. 
                      A great initiative!"
                    </Card.Text>
                    <footer className="blockquote-footer">Aman Verma</footer>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Card.Text>
                      "The real-time updates and secure login options make this an efficient tool for our community."
                    </Card.Text>
                    <footer className="blockquote-footer">Priya Sharma</footer>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Card.Text>
                      "An excellent platform for fostering transparency and collaboration among citizens and officials."
                    </Card.Text>
                    <footer className="blockquote-footer">Ravi Gupta</footer>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default Home;
