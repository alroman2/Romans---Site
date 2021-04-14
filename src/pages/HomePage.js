import React from "react";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import HomeIntro from '../components/HomeIntro';


const HomePage = () => (
  <>
    <Container fluid >
      <Jumbotron id="img-banner"> 
        <h1 className = "title"> Alex Roman</h1>
        <p className = "subtitle"> First Gen Hispanic Immigrant. Aspiring Software Engineer.</p>
      </Jumbotron>
    </Container>
    <HomeIntro></HomeIntro>    
  </>
);

export default HomePage;
