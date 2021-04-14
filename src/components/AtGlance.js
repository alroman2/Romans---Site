import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import RB from '../images/reactBootstrap.png';
import Container from 'react-bootstrap/Container';
import SkillsGif from '../images/skills.gif';

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
        <Carousel.Caption className="carousel-content-grid container">
            <div className = "Row">
                <div className = "col-8">
                    
                </div>
                <div >
                </div>
                <div >
                </div>
            </div>

        </Carousel.Caption>
        <Carousel.Caption>
          <h3>Top Skills</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={intervalTime}>
        <img
          className=" w-100 image-scale-down"
          src= {bg} 
          alt="Second slide"
        />

        <Carousel.Caption interval={intervalTime}>
          <h3>Featured Projects</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 image-scale-down"
          src= {bg} 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>My Journey</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AtGlance;