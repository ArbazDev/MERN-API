import React ,{useState} from 'react'
import {Carousel} from 'react-bootstrap'
import Heading from './heading'
import HeadingGirl from './headinggirl'
import logo from './Images/pic1.jpg'
import logo3 from './Images/pic4.jpg'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} style={{height: '100vh'}}>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo}style={{height: '100vh', width: 'auto'}}
            alt="First slide"
          />
          <Carousel.Caption>
          <Heading/>
          </Carousel.Caption>
         
        </Carousel.Item>
     
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo3}
            alt="Third slide"
            style={{height: '100vh', width: 'auto'}}
          />
           <Carousel.Caption>
           <HeadingGirl/>
          </Carousel.Caption>
        
        </Carousel.Item>
      </Carousel>
    );
  }
  