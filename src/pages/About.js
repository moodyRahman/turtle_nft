import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row class="align-items-center justify-content-center" align="center">
        <Col>
          <Card style={{backgroundColor:"#edf5e0"}}>
            <Card.Title></Card.Title>
            <Card.Body>
              Cozy Turtles NFTs are collections of programmatically, randomly
              generated NFTs on the Solana blockchain. The 1st generation
              consists of 10,000 randomly assembled turtles from over 300k total
              options. Each Turtle is comprised of a unique body, hat, face and
              outfit - the possibilities are endless!
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{backgroundColor:"#edf5e0"}}>
            <Card.Body>For more information on our roadmap, faq, etc, join our Discord!</Card.Body>
          </Card>
        </Col>
      </Row>

      <Row align="center" id="about" style={{marginTop:"50px"}}>
        <h4>Discover Cozy Turtles</h4>
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        viverra odio sit amet viverra efficitur. Aliquam a lacinia augue.
        Maecenas et volutpat felis. Donec ullamcorper non magna et ornare. Etiam
        fringilla tellus ac magna interdum tincidunt. Aenean sed iaculis ipsum.
        Aliquam posuere tellus vulputate porta laoreet. Donec arcu est, semper
        ut porta ut, suscipit sit amet velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean semper dolor eget nunc imperdiet, ut
        iaculis sapien placerat. Donec gravida elit in lacus ultricies, et
        malesuada ante tempor.
      </Row>
    </Container>
  );
};

export default About;
