import { Card, Col, Container, Row } from "react-bootstrap";
import hyeri from "../assets/hyeri.jpg";
import ecko from "../assets/ecko.png";
import hyane from "../assets/hyane.jpg";
import kurona from "../assets/kurona.jpg";

const TeamCard = ({ name, image, role, width }) => {
  return (
    <Card style={{ width: { width }, backgroundColor:"#5cdb94", color:"#05396b" }}>
      {image ? <Card.Img variant="top" src={image} /> : <></>}
      <Card.Body>
        {name}
        <footer>{role}</footer>
      </Card.Body>
    </Card>
  );
};

const Team = () => {
  return (
    <Container id="team">
      <Row className="text-center justify-content-center">
        <Col>
        <h1 style={{ fontSize: "2rem" }}>The Team</h1>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs={5} sm={3}>
          <TeamCard name="hyeri" image={hyeri} role="dev" width="50%" />
        </Col>
        <Col xs={5} sm={3}>
          <TeamCard name="ecko" image={ecko} role="dev" width="33%" />
        </Col>
      </Row>
      <Row className="justify-content-md-center" style={{ paddingTop: "25px" }}>
        <Col xs={5} sm={3}>
          <TeamCard name="hyane" image={hyane} role="mod" width="50%" />
        </Col>
        <Col xs={5} sm={3}>
          <TeamCard
            name="kurona"
            image={kurona}
            role="lead artist"
            width="50%"
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center" style={{ paddingTop: "25px" }}>
        
        <Col xs={4} sm={3}>
          <TeamCard name="jupiter" role="artist" width="50%" />
        </Col>

        <Col xs={4} sm={3}>
          <TeamCard name="pretz" role="artist" width="50%" />
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
