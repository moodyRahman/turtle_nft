import logo from "../assets/logo.png";
import { Col, Container, FormControl } from "react-bootstrap";
import { useState } from "react";
import Button from "@restart/ui/esm/Button";
const Calculator = () => {

  const isNormalInteger = (str) => {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}
  const [price, setPrice] = useState(1)

  return (
    <Container style={{ maxWidth: "50%" }}>
      <h4>Mint a Turtle</h4>
      <div
        className="center-block text-center"
        style={{ marginBottom: "20px" }}
      >
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
          style={{ width: "25%", dispay:"block", margin:"auto" }}
          alt="logo"
          src={logo}
        />
      </Col>

      <Col className="text-center mx-auto" style={{ background: "#d0e8d0", color:"#05396b", borderRadius: "10px" }}>
        <h3>
          Cozy Turtle Price <br />
        </h3>
        <div style={{ fontSize: "20px" }}>
          <FormControl
            className="text-center"
            style={{width:"75%"}}
            value={price}
            type="number"
            onChange={(e) => {
              (e.target.value === "" || (isNormalInteger(e.target.value) && e.target.value >= 0 )) ? setPrice(e.target.value):setPrice(0)
            }}
          />
          <Button
          className="btn btn-primary m-3"
          style={{ backgroundColor: "#05396b" }}
          variant="primary"
        >
          Mint a Turtle
        </Button>
          
          {Number((price*0.6).toFixed(3))} SOL <br />
          8,888 total in circulation
        </div>
      </Col>
    </Container>
  );
};

export default Calculator;
