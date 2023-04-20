import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Header from 'react-bootstrap/Navbar';



const Navbar = () => {
  return (
    <Header bg="dark" variant={"dark"} expand="lg" fixed="top">
      <Container>
      
        <Header.Brand>Gopal Studio</Header.Brand>
        <Header.Toggle aria-controls="basic-navbar-nav" />
        <Header.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Header.Collapse>
      </Container>
    </Header>
  );
}

export default Navbar;