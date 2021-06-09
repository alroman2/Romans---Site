import React, {useRef, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'bootstrap';


const ContactForm = () => {
    const [email,setEmail] = React.useState("");
    const [message,setMessage] = React.useState("");
    const contactFormRef = useRef();
    return (
        <Container ref={contactFormRef}>
            <div className="title-box">
                <h1> Contact Me</h1>
            </div>
            <form className="contact-body">
                <Row>
                    <Col sm={2}>
                        <p>Email: </p>
                    
                    </Col>
                    <Col sm={6} lg={8}>
                        <input type='text' className="inputBox" onChange={event => setEmail(event.target.value)}></input>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2} >
                        <p>Message: </p>
                    </Col>
                    <Col sm={6} lg={8}>
                        <input type='text'className="inputBox inputBox-lg" onChange={event => setMessage(event.target.value)}></input>
                    
                    </Col>
                    
                </Row>
                <Row >
                    <Col sm={6} lg={10} style={{justifyContent: 'flex-end'}}> 
                        <button id="contactSubmitBtn">
                            Send Message
                        </button>
                    
                    </Col>

                </Row>
            </form>
        </Container>

        
    );
};


export default ContactForm;



