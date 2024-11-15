import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeContainer from "./home/HomeContainer";

const Home: React.FC = () => (
  <Container>
    <Row>
      <Col>
        <h1>Quotes</h1>
        <HomeContainer />
      </Col>
    </Row>
  </Container>
);

export default Home;
