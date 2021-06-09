import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Footer = () => (
    <>
        <Container className = "Footer"> 
            <Row>
                <Col>

                </Col>
            </Row>
            <Row>
            
            <Container>
                <Row>
                    <Link to="/" style={{color: "black",textDecoration:"none"}}>Amroman </Link>
                    <span>&copy;2021 Alex Roman</span>
                </Row>
                
                    

            </Container>

            </Row>
        </Container>
    </>
);

export default Footer;