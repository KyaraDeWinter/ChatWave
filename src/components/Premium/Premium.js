import React from 'react';
import './Premium.css';
import StripeCheckout from 'react-stripe-checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

function Premium() {

    const onToken = (token) => {
        console.log(token)
    }

  return (
    <>
    <Container id="premium" className='premium'>
        <Card className="premiumCard">
        <Card.Body>
        <Row>
            <Col>
                <Card.Title>Become a ChatWave Premium Member!</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
            </Col>
            <Col>
            <StripeCheckout
                token={onToken}
                name="Join The Premium Wave!"
                description="Extra mogelijkheden met Premium!" 
                currency='eur'
                amount="899"
                panelLabel="Betaal Eenmalig " 
                stripeKey="pk_test_51KlA5ZCyeIe2pvAfATPuEeSV3NNynnqDrf9RuZOTeeIpmHd5wPgXDyt0c1BCIGHNN8sfU2uMWD6oNSl596rBvwlp001LAU01py"
            />
            </Col>
        </Row>
        </Card.Body>
        </Card>
    </Container>
    </>
  );
}

export default Premium;