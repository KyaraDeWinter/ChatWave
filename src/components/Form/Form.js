import React from 'react';
import './Form.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Forms from 'react-bootstrap/Form';

function Form() {
  return (
    <>
        <Container id="card" className='cards'>
            <Row>
                <Col className='text'>
                <h2>Contact Us!</h2>
                <p>ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec<br/><br/>ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa</p>
                </Col>
                <Col>
                <Forms>
                    <Forms.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Forms.Label>Name</Forms.Label>
                        <Forms.Control type="email" placeholder="firstname, lastname" />
                    </Forms.Group>
                    <Forms.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Forms.Label>Email</Forms.Label>
                        <Forms.Control type="email" placeholder="name@example.com" />
                    </Forms.Group>
                    <Forms.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Forms.Label>Message</Forms.Label>
                        <Forms.Control as="textarea" rows={3} />
                    </Forms.Group>
                </Forms>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Form;