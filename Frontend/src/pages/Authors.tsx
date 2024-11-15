import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthorsContainer from "./authors/AuthorsContainer";

const Authors: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Authors</h1>
        </Col>
      </Row>
      <AuthorsContainer />
    </Container>
  );
};

export default Authors;
