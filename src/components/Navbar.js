import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom" bg="dark" variant="dark">
      <Container fluid>
        {/* Brand in the center */}
        <Navbar.Brand href="/" className="position-absolute start-50 translate-middle-x">
          CFAT
        </Navbar.Brand>

        {/* Hamburger toggle button */}
        <Navbar.Toggle aria-controls="navbar-collapse" />

        {/* Collapsible content */}
        <Navbar.Collapse id="navbar-collapse">
          {/* Left: Navigation Links */}
          <Nav className="me-auto ms-4">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/portfolio">
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>

          {/* Right: Social Links */}
          <Nav className="ms-auto me-4">
            <Nav.Link href="https://facebook.com" target="_blank" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </Nav.Link>
            <Nav.Link href="https://twitter.com" target="_blank" className="social-icon">
              <i className="fab fa-twitter"></i>
            </Nav.Link>
            <Nav.Link href="https://linkedin.com" target="_blank" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </Nav.Link>
            <Nav.Link href="https://instagram.com" target="_blank" className="social-icon">
              <i className="fab fa-instagram"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
