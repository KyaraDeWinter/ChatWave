import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Navigationbar bg="light" expand="lg">
    <Container fluid>
        <Navigationbar.Brand href="#">ChatWave</Navigationbar.Brand>
        <Navigationbar.Toggle aria-controls="navbarScroll" />
        <Navigationbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link href="#card">News</Nav.Link> 
            <Nav.Link href="#premium">Join Premium</Nav.Link>
            <Nav.Link href="#about">About ChatWave</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        </Navigationbar.Collapse>
    </Container>
    </Navigationbar>
  );
}

export default Navbar;