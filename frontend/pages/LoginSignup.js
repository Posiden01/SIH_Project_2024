import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginSignup() {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate('/signup'); // Navigate to the Signup page
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
          <div className="text-center mt-3">
            <p>
              New user?{' '}
              <Button variant="link" onClick={handleSignupRedirect}>
               Sign up
              </Button>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginSignup;
