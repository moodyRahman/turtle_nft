import Button from "@restart/ui/esm/Button";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const MoodNav = () => {
  return (
    <Container fluid style={{ display: "flex", flexDirection: "row" }}>
      <Row>
        <Navbar
          fixed="top"
          expand="lg"
          style={{ backgroundColor: "#5cdb94", paddingBottom:"0px", paddingTop:"0px" }}
          variant="dark"
          // make that green
        >
          <Navbar.Collapse>
            <Col>
              <Navbar.Brand
                as={Link}
                to="/"
              >
                <img
                  style={{ width: "8%", float: "left" }}
                  alt="logo"
                  src={logo}

                />
                <div style={{color:"#05396b", fontSize:"2rem",fontWeight:"1000", marginLeft:"65px", marginTop:"10px", marginBottom:"-40px"}}>
                Cozy Turtles
                  </div>
              </Navbar.Brand>
            </Col>
            
            <Col align="center">
            <Nav style={{ display: "flex", flexDirection: "row", justifyContent:"center", }}>
            <Nav.Link style={{ color: "#05396b", fontSize:"1.2rem" }} href="#roadmap">
                Roadmap
              </Nav.Link>
              <Nav.Link style={{ color: "#05396b", fontSize:"1.2rem" }} href="#faq">
                FAQ
              </Nav.Link>
              <Nav.Link style={{ color: "#05396b", fontSize:"1.2rem" }} href="#team">
                The Team
              </Nav.Link>
              <Nav.Link style={{ color: "#05396b", fontSize:"1.2rem" }} href="#attributes">
                Attributes
              </Nav.Link>
              <Nav.Link style={{ color: "#05396b", fontSize:"1.2rem" }} href="#rarity">
                Rarity
              </Nav.Link>
            </Nav>
            </Col>

            <Col className="text-end">

            <Button style={{float:"right", width:"30%", color: "#05396b", border:"solid", borderRadius:"10px", textAlign:"center" }} as={Nav.Link}>
                Connect Wallet
            </Button>

            </Col>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
};

export default MoodNav;
