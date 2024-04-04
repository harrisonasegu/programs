import React from 'react';
import CarouselImage1 from './assets/Images/carouselImages/HotelPalor.png'
import CarouselImage2 from './assets/Images/carouselImages/solar4.jpeg'
import CarouselImage3 from './assets/Images/carouselImages/solar8.jpeg'
import CarouselImage4 from './assets/Images/carouselImages/solar11.jpeg'
import './Scss/carousel.css'
import { Carousel } from 'antd';

const carouselContents = () => (
  <Carousel autoplay>
    <div className='contentStyle'>
 
     {/* <h3 style={contentStyle}>1</h3> */}
      <img className='img' src={CarouselImage1} alt="" />
    </div>
    <div className='contentStyle'>
    <img className='img' src={CarouselImage2} alt="" />
      
    </div>
    <div className='contentStyle'>
      <img className='img' src={CarouselImage3} alt="" />

    </div>
    <div className='contentStyle'>
      <img className='img' src={CarouselImage4} alt="" />
    </div>
  </Carousel>
);
export default carouselContents;