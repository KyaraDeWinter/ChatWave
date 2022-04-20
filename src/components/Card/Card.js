import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import { Link } from "react-router-dom";
import './Card.css';

// import News from './pages/News/News.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Cards() {
  return (
    <>
        <Container id="card" className='cards'>
        <Row>
            <Col>
            <Card>
            <Card.Img variant="top" src="images/join.png" />
            <Card.Body>
                <Card.Title>Join The Community <Badge bg="secondary">New</Badge></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className='button'>
                <Link to="/News">Read More..</Link>
                </Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
            <Card.Img variant="top" src="images/premium.png" />
            <Card.Body>
                <Card.Title>Benefits of Premium</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className='button'>
                <Link to="/News">Read More..</Link>
                </Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
            <Card.Img variant="top" src="images/live.png" />
            <Card.Body>
                <Card.Title>ChatWave is LIVE!</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className='button'>
                <Link to="/News">Read More..</Link>
                </Button>
            </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    </>
  );
}

export default Cards;