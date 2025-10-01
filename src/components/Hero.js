import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import selfImage from '../Assets/self.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="d-flex justify-content-center">
              <img 
                src={selfImage} 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          </Col>
          <Col lg={6}>
            <h1 className="name-title">I'm Shifat Rahman </h1>
            <p className="job-title">Future-Focused Tech Explorer</p>
            <p className="about-text">
        Learning, building, and iterating on personal projects
         to create clean, elegant and functional solutions.Exploring modern web 
         technologies while creating practical, minimalistic, and user-focused projects.
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