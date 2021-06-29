import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import {Link } from "react-router-dom";

export const NavbarComponent: React.FC = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>👤 Just People</Navbar.Brand>
    </Container>
  </Navbar>
);
