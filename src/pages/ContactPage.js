import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <div className="page-section">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="text-center mb-5">Contact Me</h1>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="your.email@example.com" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Your message here..." 
                />
              </Form.Group>
              <div className="text-center">
                <Button type="submit" className="btn-custom">Send Message</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;