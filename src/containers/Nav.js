import React from 'react';
// import { link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const Nav = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">The Sercet Recipes</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Nav;
