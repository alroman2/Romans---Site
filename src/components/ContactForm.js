import React, {useRef, useState} from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'bootstrap';


const ContactForm = () => {
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message,setMessage] = React.useState("");
    const contactFormRef = useRef();

    
    return (
        <Container id="contactForm">
            <div className="title-box">
                <h1> Contact Me</h1>
            </div>
            <form className="contact-body">
                <Row>
                    <Col sm={2}>
                        <p>Name: </p>
                    
                    </Col>
                    <Col sm={6} lg={8}>
                        <input type='text' className="inputBox" onChange={event => setName(event.target.value)}></input>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <p>Email: </p>
                    
                    </Col>
                    <Col sm={6} lg={8}>
                        <input type='text' className="inputBox" onChange={event => setEmail(event.target.value)}></input>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <p>Subject:  </p>
                    
                    </Col>
                    <Col sm={6} lg={8}>
                        <input type='text' className="inputBox" onChange={event => setSubject(event.target.value)}></input>
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
                        
                        //TODO: Write API request to server to send email
                        //TODO: Add name and subject lines
                        //TODO: Add a clear button, text auto clears after send
                        {/* use the endpoint /api/contact 
                        Req params{
                            name: 'string',
                            email: 'string',
                            subject: 'string',
                            message: 'string',
                        } */}
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



