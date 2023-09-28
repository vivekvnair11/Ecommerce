import React from 'react'
import image1 from "../../images/image-product-1.jpg"
import Count from '../Count';
import './summary.css'
import { useCount } from '../../App';
import { useState, useEffect } from 'react';


function OrderSummary() {
  const { count } = useCount();
  const [SubTotal, setSubTotal] = useState(0);


  
 
    // Calculate the subtotal when the count changes
    const calculateSubtotal = () => {
      setSubTotal(count * 125); }
    
      useEffect(() => {

    calculateSubtotal();
  }, [count]);

  return (
    <div className='order-summary'>
      <div className='order-summary-content'>
          <div className='order-summary-head'>
                Order Summary
          </div>

          <div className='order-summay-image'>
           <img src={image1}></img>
          </div>

          <div className='order-summary-cart'>
                <div className='order-summary-product'>Fall Limited Edition Sneakers <br /><b>$125</b>
                </div>
                <div className='order-summary-count'>
                  <Count></Count>
                </div>
          </div>


          <div className='order-summary-offertxt'>
          Gift Card / Discount code
          </div>


          <div className='order-summary-offer'>
            <form className='form-group'>
           
              <label className='order-summary-input'>
              <input  type="text"/>
              </label>

            </form>
            <div className='order-summary-input-btn'>
             <button>Apply</button>
            </div>
          </div>

            <div className='order-summary-subtotal order-values' >
                 <div className='order-summary-subtotal-txt'>
                  Sub total
                  </div>
                  <div className='order-summary-subtotal-value'>
                  ${SubTotal.toFixed(2)}
                  </div>
             </div>

             <div className='order-summary-tax order-values'>
                  <div className='order-summary-tax-txt'>
                  Tax
                  </div>
                  <div className='order-summary-tax-value'>
                   $3.15
                  </div>
          </div>

             <div className='order-summary-shipping order-values'>
                 <div className='order-summary-shipping-txt'>
                  Shipping
             
                 </div>
                 <div className='order-summary-shipping-value'>
                 Free
                 </div>
             </div>

             
            <div className='order-summary-total order-values'>
                <div className='order-summary-total-txt'>
                 <b> Total</b>
             
                </div>
                <div className='order-summary-total-value'>
                ${SubTotal+3.15}
                 </div>
             </div>


        </div>  
    </div>
  )
}

export default OrderSummary
