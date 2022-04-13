import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div className='footer'>
        <Row>
            <Col>
                <h5>Contact</h5>
                <hr/>
                <p>Frequently Asked Questions</p>
                <p>Mail: info@chatwave.nl</p>
                <p>Tel: +31 0000000</p>
            </Col>
            <Col>
                <h5>Navigatie</h5>
                <hr/>
                <p>Premium</p>
                <p>Nieuws</p>
                <p>Over Ons</p>
            </Col>
        </Row>
    </div>
  );
}

export default Footer;