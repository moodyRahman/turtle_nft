import { Card, Col, Container, Row } from "react-bootstrap";

const Team = () => {
  return (
    <Container id="team">
      <Row align="center">
        <h1 style={{ fontSize: "2rem" }}>The Team</h1>
      </Row>

      <Row align="center" style={{ padding: "25px" }}>
        <Col>
          <Card style={{ width: "400px" }}>AdrianK</Card>
        </Col>
      </Row>
      <Row align="center" style={{ padding: "25px" }}>
        <Col>
          <Card>Ecko</Card>
        </Col>

        <Col>
          <Card>Hyeri</Card>
        </Col>

        <Col>
          <Card>Kurona</Card>
        </Col>
      </Row>

      <Row align="center" style={{ padding: "25px" }}>
        <Col>
          <Card>Katherine</Card>
        </Col>

        <Col>
          <Card>Jupiter</Card>
        </Col>

        <Col>
          <Card>Pretz</Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
