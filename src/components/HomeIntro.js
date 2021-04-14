import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image from '../images/sf.jpg';
import image2 from '../images/_Alex_profile_2.jpg';
import image3 from '../images/_Alex_profile_1.jpg';
import image4 from '../images/_Alex_headshot.jpeg';
import AtGlance from './AtGlance';
const HomeIntro = () => (
    <>
       <div className = "content-body">
      <div className="title-box">
        <h1> Hey, I'm Glad You're Here. <br></br> Lets Connect.</h1>
      </div>
      <Container className = "content-body-margin">
        <Row>
          <Col lg={7} md={4} style={{alignItems: "center"}}>
            I'm a student at the University of California - Merced studying Computer Science and Engineering with a Minor in Cognitive Sciences.
            <br></br>Look around, give any feedback, or lets chat!
            <Row> 
                <AtGlance></AtGlance>
            </Row>
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

export default HomeIntro;