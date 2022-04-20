import React from 'react';
import './Navbar.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Navigationbar bg="light" expand="lg">
    <Container fluid>
        <Navigationbar.Brand><Link className='link' to="/Home">CHATWAVE</Link></Navigationbar.Brand>
        <Navigationbar.Toggle aria-controls="navbarScroll" />
        <Navigationbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Nav.Link>
              <div onClick={() => window.location.replace("/#news")}>
                <span>News</span>
              </div>
            </Nav.Link> 
            <Nav.Link>
              <div onClick={() => window.location.replace("/#premium")}>
                <span>Premium</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div onClick={() => window.location.replace("/#about")}>
                <span>About</span>
              </div>
            </Nav.Link>
            <Nav.Link><Link className='link' to="/Contactpage">Contact</Link></Nav.Link>
        </Nav>
        </Navigationbar.Collapse>
    </Container>
    </Navigationbar>
  );
}

export default Navbar;