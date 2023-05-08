import * as React from 'react'
import { Link } from 'gatsby';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from './NavBar.module.css'


function NavBar() {
  return (
    <Navbar sticky="top" bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Razor Hollow</Navbar.Brand>
      </Container>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">
                Photography
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Website Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">Video Production</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;