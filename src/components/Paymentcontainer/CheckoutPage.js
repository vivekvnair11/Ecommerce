import React from 'react'
import Payment from '../checkout/Payment'
import OrderSummary from '../OrderSummary/OrderSummary'
import './checkoutpage.css'

function CheckoutPage() {
  return (
    <div className='checkout-page'>
      <Payment></Payment>
      <OrderSummary></OrderSummary>

      
    </div>
  )
}

export default CheckoutPage
