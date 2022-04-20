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
                <h5>Navigation</h5>
                <hr/>
                <p>News</p>
                <p>Premium</p>
                <p>About Us</p>
            </Col>
        </Row>
    </div>
  );
}

export default Footer;