import React from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import ProfilePic from '../images/sf.jpg';
const Profile = () => (
    <>
        <Container>
            <Row>
                <Col lg={3} md={3}>
                    <img className="grid-img" src = {ProfilePic}></img>
                </Col>
                <Col>
                    <Row> Major: Computer Science and Engineering </Row>
                    <Row> Minor: Cognitive Sciences</Row>
                </Col>
            </Row>
        </Container>
    </>
);

export default Profile;