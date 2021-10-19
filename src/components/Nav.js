import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const MoodNav = () => {
  return (
    <Container fluid style={{ display: "flex", flexDirection: "row" }}>
      <Navbar
        fixed="top"
        expand="lg"
        style={{ backgroundColor: "rgba(92, 219, 148, 1)" }}
        variant="dark"
        // make that green
      >
        <Navbar.Collapse>
          <Navbar.Brand
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "-500px",
            }}
            as={Link}
            to="/"
          >
            <img style={{ width: "5%", float: "left" }} alt="logo" src={logo} />
            Cozy Turtles
          </Navbar.Brand>

          <Nav style={{ display: "flex", flexDirection: "row" }}>
            <Nav.Link style={{ color: "#05396b" }} href="#team">
              The Team
            </Nav.Link>
            <Nav.Link style={{ color: "#05396b" }} href="#faq">
              FAQ
            </Nav.Link>
            <Nav.Link style={{ color: "#05396b" }} href="#rarity">
              Rarity
            </Nav.Link>
            <Nav.Link style={{ color: "#05396b" }} href="#roadmap">
              Roadmap
            </Nav.Link>
            <Nav.Link style={{ color: "#05396b" }} href="#attributes">
              Attributes
            </Nav.Link>
          </Nav>

          <Nav.Link style={{ color: "#05396b" }} as={Link} to="/wallet">
            Connect Wallet
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default MoodNav;
