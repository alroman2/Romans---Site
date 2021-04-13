import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image from '../images/sf.jpg';
import image2 from '../images/_Alex_profile_2.jpg';
import image3 from '../images/_Alex_profile_1.jpg';
import image4 from '../images/_Alex_headshot.jpeg';


const HomePage = () => (
  <>
    <Container fluid >
      <Jumbotron id="img-banner"> 
        
        <h1 className = "title"> Alex Roman</h1>
        <p className = "subtitle"> First Gen Hispanic Immigrant. Aspiring Software Engineer.</p>
      </Jumbotron>
    </Container>
    <div className = "content-body">
      <div className="title-box">
        <h1> Hey, I'm Glad You're Here.</h1>
      </div>
      <Container className = "content-body-margin">
        <Row>
          <Col lg={7} md={4}>
            I'm a student at the University of California - Merced studying Computer Science and Engineering with a Minor in Cognitive Sciences.
          </Col>
          <Col lg={5} md={8}>
              <Container>
                
                <Row className="grid">
                  <Col>
                    <img src={image} className="grid-img"></img>
                  
                  </Col>
                  <Col>
                    <img src={image2} className="grid-img"></img>
                  </Col>
                </Row>

                <Row className="grid">
                  <Col>
                    <img src={image3} className="grid-img"></img>
                  </Col>
                  <Col>
                    <img src={image4} className="grid-img"></img>
                  </Col>
                </Row>
              </Container>

            
          </Col>

        </Row>
      </Container>

    </div>
  </>
);

export default HomePage;
