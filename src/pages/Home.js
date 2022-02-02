import Button from "@restart/ui/esm/Button";
import { Container, Row, Col } from "react-bootstrap";
import TurtleSplide from "../components/TurtleSplide";
import logo from "../assets/logo.png";
import Team from "./Team";
import Faq from "./Faq";
import Calculator from "../components/Calculator";
import Roadmap from "./Roadmap";
import LineBreak from "../components/LineBreak";

const Home = () => {
  return (
    <Container style={{ color: "#5cdb94", marginBottom: "100px" }}>
      <Row className="text-center" id="home">
        <div>
          <h1 className="display-4 p-2 m-5" style={{ fontWeight: 500 }}>
            Cozy Turtles
          </h1>
        </div>
      </Row>

      <Container className="text-center" style={{fontSize:"1.5rem"}}>
        10,000 unique, cute, and cozy turtles living in the Solana blockchain.
        Each of them are uniquely generated with more than 120+ hand drawn
        traits!
      </Container>

      {/* make the buttons larger and move them closer to the carousel */}
      <Container className="text-center" style={{ paddingTop: "25px" }}>
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
      <TurtleSplide />
      
      <LineBreak />

      <Row className="text-center" style={{ marginTop: "50px", textAlign:"center" }}>
        <Calculator />
      </Row>
      
      <LineBreak />
      
      <Container>
        <Roadmap />
      </Container>

      <LineBreak />
      
      <Container>
        <Faq />
      </Container>

      <LineBreak />

      <Container>
        <Team />
      </Container>
      
      <LineBreak />
      
      <Rarity />

      <LineBreak />
      
      <Attributes />

      <LineBreak />


    </Container>
  );
};

export default Home;
