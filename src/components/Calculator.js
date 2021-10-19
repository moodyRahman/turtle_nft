
import logo from "../assets/logo.png"
import { Col, Container } from "react-bootstrap";
const Calculator = () => {
  return (

    <Container style={{maxWidth:"50%"}}>
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
    </Container>
  );
};

export default Calculator;
