import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar2() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>);
}

export default NavBar2;