import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PortfolioPage = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 2, title: 'Project 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore.' },
    { id: 3, title: 'Project 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
    { id: 4, title: 'Project 4', description: 'Duis aute irure dolor in reprehenderit in voluptate.' },
  ];

  return (
    <div className="page-section">
      <Container>
        <h1 className="text-center mb-5">My Portfolio</h1>
        <Row>
          {projects.map(project => (
            <Col lg={6} className="mb-4" key={project.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PortfolioPage;