import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import close from "../images/icon-close.svg"
import "../components/css/ImageCorousal.css"

function ImageCorousal({display,toggle}) {
 

  return (
    <div>
  <div className='modal-image'>
    {display && (
        <div className='modal'>
          <div className='toggle' onClick={toggle}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <Carousel>
            <div id='thumbnail'>
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
      )}</div>
      </div>
  );
}

export default ImageCorousal;
