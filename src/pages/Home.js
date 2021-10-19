import Button from "@restart/ui/esm/Button";
import { Container, Row, Col } from "react-bootstrap";
import TurtleCarousel from "../components/Carousel";
import logo from "../assets/logo.png";
import Team from "./Team";
import Faq from "./Faq";
import Calculator from "../components/Calculator";

const Home = () => {
  return (


    // find a cooler font
    
    <Container className="text-center" style={{ color: "#5cdb94", marginBottom:"100px" }}>
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
        <Calculator />
      </Row>
      <hr
          style={{
            marginTop: "75px",
            marginBottom: "75px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        />
      <Team />
      <hr
          style={{
            marginTop: "75px",
            marginBottom: "75px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        />
      <Faq />
    
    </Container>
  );
};

export default Home;
