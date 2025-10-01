import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import selfImage from '../Assets/self.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="text-center">
              <img 
                src={selfImage} 
                alt="Profile" 
                className="profile-image rounded"
              />
            </div>
          </Col>
          <Col lg={6}>
            <h1 className="name-title">Your Name</h1>
            <p className="job-title">Web Developer & Designer</p>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/contact">
              <Button className="btn-custom">Contact Me</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;