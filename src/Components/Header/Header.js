import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
