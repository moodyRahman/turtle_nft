import Button from "@restart/ui/esm/Button";
import { Container, Row, Col } from "react-bootstrap";
import TurtleCarousel from "../components/Carousel";
import logo from "../assets/logo.png";
import About from "./About.js"

const Home = () => {
  return (


    // find a cooler font
    
    <Container className="text-center" style={{ color: "#5cdb94" }}>
      <Row id="home">
        <div>
          <h1 className="display-4 p-2 m-5" style={{ fontWeight: 500 }}>
            Cozy Turtles
          </h1>
        </div>
      </Row>

      <Container>
        10,000 unique, cute, and cozy turtles living in the Solana blockchain.
        Each of them are uniquely generated with more than 120+ hand drawn
        traits!
      </Container>

      {/* make the buttons larger and move them closer to the carousel */}
      <Container style={{paddingTop:"75px"}}>
        <Button
          className="btn btn-primary m-3"
          style={{ backgroundColor: "#05396b" }}
          variant="primary"
        >
          Mint a Turtle
        </Button>

        <Button
          href="https://discord.gg/cozyturtles"
          style={{ backgroundColor: "#05396b" }}
          className="btn btn-primary m-3"
          variant="primary"
        >
          Discord
        </Button>

        <Button
          href="https://twitter.com/CozyTurtlesNFT"
          style={{ backgroundColor: "#05396b" }}
          className="btn btn-primary m-3"
          variant="primary"
        >
          Twitter
        </Button>
      </Container>
      <Row style={{ marginTop: "100px" }} className="m-6 p-6">
        <TurtleCarousel />
      </Row>

      <Row style={{ marginTop: "150px" }}>
        <h4>Mint a Turtle</h4>
        <div class="center-block text-center" style={{ marginBottom: "20px" }}>
          Mint a turtle by connecting your SOL wallet.
        </div>
        <Col
          style={{
            backgroundColor: "#05396b",
            maxWidth: "500px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "25%", paddingBottom: "20px" }}
            alt="logo"
            src={logo}
          />
        </Col>

        <Col style={{ background: "#d0e8d0", borderRadius: "10px" }}>
          <h3>
            Single <br />
          </h3>
          <div style={{ fontSize: "20px" }}>1 Cozy Turtle</div>
        </Col>
      </Row>
      <Row>
        <hr
          style={{
            marginTop: "75px",
            marginBottom: "75px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        />
      </Row>
      <About />
    </Container>
  );
};

export default Home;
