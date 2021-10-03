import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"

const MoodNav = () => {
  return (
    <Navbar expand="lg" 
    // bg="dark" variant="dark"
    >
        <Navbar.Brand style={{marginRight:"-170px"}} as={Link} to="/"><img style={{maxWidth:"50%", maxHeight:"auto"}} alt="logo" src={logo} /></Navbar.Brand>
      <Container className="d-flex m-auto">

        <div className="justify-content-center d-flex flex-row m-auto p-2">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            <Nav.Link as={Link} to="/rarity">Rarity</Nav.Link>
            <Nav.Link as={Link} to="/roadmap">Roadmap</Nav.Link>
            <Nav.Link as={Link} to="/attributes">Attributes</Nav.Link>
            <Nav.Link as={Link} to="/wallet">Connect Wallet</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}

export default MoodNav