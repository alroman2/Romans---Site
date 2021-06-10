import React, {useRef, useState} from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'bootstrap';


const ContactForm = () => {
    const [senderName,setName] = React.useState("");
    const [senderEmail,setsenderEmail] = React.useState("");
    const [senderSubject, setsenderSubject] = React.useState("");
    const [senderMessage,setsenderMessage] = React.useState("");
    const contactFormRef = useRef();

    const sendEmail = async() => {
        
            const res = await fetch(`/api/contact`, {
                method:  'post',
                body: JSON.stringify({
                    name: senderName,
                    email: senderEmail,
                    subject: senderSubject,
                    message: senderMessage
                }),
                
                headers: {
                    'Content-Type' : 'application/json',
                }
            });

            const code = await res.json();
            
            console.log(code);
    }

    
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
                        <input type='text' className="inputBox" onChange={event => setsenderEmail(event.target.value)}></input>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <p>Subject:  </p>
                    
                    </Col>
                    <Col sm={6} lg={8}>
                        <input type='text' className="inputBox" onChange={event => setsenderSubject(event.target.value)}></input>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2} >
                        <p>Message: </p>
                    </Col>
                    <Col sm={6} lg={8}>
                        <input type='text'className="inputBox inputBox-lg" onChange={event => setsenderMessage(event.target.value)}></input>
                    
                    </Col>
                    
                </Row>
                <Row >
                    <Col sm={6} lg={10} style={{justifyContent: 'flex-end'}}> 
                        <button id="contactSubmitBtn" onClick={()=> sendEmail()}>
                            Send Message
                        </button>
                    
                    </Col>

                </Row>
            </form>
        </Container>

        
    );
};


export default ContactForm;



