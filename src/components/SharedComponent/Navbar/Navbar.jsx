import React from "react";
import { Container, Navbar } from "react-bootstrap";
import NavBrand from "./NavBrand/NavBrand";
import Navitem from "./NavItem/NavItem";
const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-light" fixed="top">
      <Container>
        <NavBrand />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navitem />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
