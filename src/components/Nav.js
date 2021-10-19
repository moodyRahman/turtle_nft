import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const MoodNav = () => {
  return (
    <Navbar
      fixed="top"
      style={{ backgroundColor: "rgba(92, 219, 148, 1)" }}
      variant="dark"
      // make that green
    >
      <Navbar.Brand style={{width:"10%"}} as={Link} to="/">
        <img
          style={{ width: "20%", float: "left" }}
          alt="logo"
          src={logo}
        />
        <div style={{ float: "left" }}>Cozy Turtles</div>
      </Navbar.Brand>

      <Nav style={{marginLeft:"550px"}} className="me-auto">
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

        {/* <Nav.Link style={{ color: "#05396b" }} as={Link} to="#attributes">
          Attributes
        </Nav.Link> */}

        {/*move this one to the fer right  */}
        {/* add a mint a turtle button too */}
        <Nav.Link
          style={{ color: "#05396b", marginLeft:"500px"}}
          as={Link}
          to="/wallet"
        >
          Connect Wallet
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MoodNav;
