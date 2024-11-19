import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

// Importing components for different pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Report from './pages/Report';
import LoginSignup from './pages/LoginSignup';
import NoticeBoard from './pages/NoticeBoard';
import ContactUs from './pages/ContactUs';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">Unauthorized Construction Monitoring</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <Nav.Link href="/report">Report</Nav.Link>
              <Nav.Link href="/login-signup">Login/Sign Up</Nav.Link>
              <Nav.Link href="/notice-board">Notice Board</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-3 mt-5">
        <Container>
          <div className="text-center">
            <p>&copy; 2024 Unauthorized Construction Monitoring Website. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </Router>
  );
}

export default App;
