import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <div className="page-section">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="text-center mb-5">About Me</h1>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="about-text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;