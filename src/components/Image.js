import React, { useState, useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-3.jpg";

import "../components/css/Image.css";
import ImageCorousal from './ImageCorousal';

function Image() {
  const [isDivVisible, setDivVisible] = useState(false);

  const toggleDivVisibility = () => {
    setDivVisible(!isDivVisible);
  };

  useEffect(() => {
    // Add or remove the CSS class based on isDivVisible
    if (isDivVisible) {
      document.body.classList.add('body-black-background');
    } else {
      document.body.classList.remove('body-black-background');
    }

    // Clean up by removing the class when the component unmounts
    return () => {
      document.body.classList.remove('body-black-background');
    };
  }, [isDivVisible]);



  return (
    
    <div>
      
    <div className='carousal-image'>
      <Carousel className='image-courousal' onClickItem={toggleDivVisibility}>
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
      </Carousel>
     

    </div>
    <div className='overlay'>
    <ImageCorousal display={isDivVisible} toggle={toggleDivVisibility}></ImageCorousal></div></div>
  );
}

export default Image;
