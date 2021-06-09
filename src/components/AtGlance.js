import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import RB from '../images/reactBootstrap.png';
import Container from 'react-bootstrap/Container';
import SkillsGif from '../images/skills.gif';
import JourneyGif from '../images/My_Journey_Carousel.gif';
import FeaturedProj from '../images/Featured_Projects.gif';


const AtGlance = function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const bg = new URL('https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')
  const intervalTime = 5000;
 
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="content-body-margin">
      <Carousel.Item interval={intervalTime}>
        <img
          className=" w-100 image-scale-down"
          src= {SkillsGif} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Top Skills</h3>
          <p>Crafting Web and Mobile experiences - front to the back.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={intervalTime}>
        <img
          className=" w-100 image-scale-down"
          src= {FeaturedProj} 
          alt="Second slide"
        />

        <Carousel.Caption interval={intervalTime}>
          <h3>Featured Projects</h3>
          <p>A lightweight Twitter App - Shopping Page - Movie Discovery App</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 image-scale-down"
          src= {JourneyGif} 
          alt="Third slide"
        />

        <Carousel.Caption interval={intervalTime}>
          <h3>My Journey</h3>
          <p>
            From Mexico to the Bay to the heart of California
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AtGlance;