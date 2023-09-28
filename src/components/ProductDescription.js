import React from 'react'
import '../components/css/ProductDescription.css'
import Count from '../components/Count'
import AddtoCart from '../components/AddtoCart'

function ProductDescription() {
  return (
    <div className='product'>
    <div className='product-details'>
      <div className='company-name'>
        SNEAKER COMPANY
      </div>
      <div className='product-heading'>
        <h2>
      Fall Limited Edition</h2>
      </div>
      <div className='product-description'><p>
      These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>
      </div>
      <div className='product-pricing'>
        <div className='pricing'>
       <div className='offer-price'><b> $125.00 </b></div>
        <div className='offer'>50%</div>
        </div>
        <div className='initial-price'>$250.00</div>
      </div>
      <div className='product-components'>
      <Count className='count'></Count>
      <AddtoCart className='cartbutton'showIcon={true} > Add to Cart</AddtoCart>
      </div>
      
    </div></div>
  )
}

export default ProductDescription
