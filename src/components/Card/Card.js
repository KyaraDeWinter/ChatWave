import React from 'react';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cards() {
  return (
    <>
        <Container className='cards'>
        <Row>
            <Col>
            <Card>
            <Card.Img variant="top" src="images/join.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className='button'>Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
            <Card.Img variant="top" src="images/premium.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className='button'>Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
            <Card.Img variant="top" src="images/live.png" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className='button'>Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    </>
  );
}

export default Cards;