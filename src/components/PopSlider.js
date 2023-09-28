import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-3.jpg"

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src= {image1} onDragStart={handleDragStart} role="presentation" />,
  <img src={image2} onDragStart={handleDragStart} role="presentation" />,
  <img src={image3} onDragStart={handleDragStart} role="presentation" />,
];

const PopSlider = () => {
  return (
   
   
    <AliceCarousel mouseTracking items={items} />
  );
}

export default PopSlider