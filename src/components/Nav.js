import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"

const MoodNav = () => {
  return (
    <Navbar fixed="top" expand="lg" 
    style={{backgroundColor:"rgba(92, 219, 148, 1)"}} 
    variant="dark"
    // make that green
    >
        <Navbar.Brand style={{marginRight:"-1000px", paddingLeft:"20px"}} as={Link} to="/"><img style={{maxWidth:"5%", maxHeight:"auto"}} alt="logo" src={logo} /></Navbar.Brand>
      <Container className="d-flex m-auto">

        <div className="justify-content-center d-flex flex-row m-auto p-2">
          <Nav className="me-auto">
            <Nav.Link style={{color:"#05396b"}} as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link style={{color:"#05396b"}} as={Link} to="/team">The Team</Nav.Link>
            <Nav.Link style={{color:"#05396b"}} as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link style={{color:"#05396b"}} as={Link} to="/rarity">Rarity</Nav.Link>
            <Nav.Link style={{color:"#05396b"}} as={Link} to="/roadmap">Roadmap</Nav.Link>
            <Nav.Link style={{color:"#05396b"}} as={Link} to="/attributes">Attributes</Nav.Link>
            <Nav.Link style={{color:"#05396b"}} as={Link} to="/wallet">Connect Wallet</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}

export default MoodNav