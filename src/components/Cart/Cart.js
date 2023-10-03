import React from 'react';
import '../Cart/Cart.css';
import { useCount } from '../../App';
import image1 from "../../images/image-product-1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import AddtoCart from '../Add-to-cart/AddtoCart';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import OrderSummary from '../OrderSummary/OrderSummary';


function Cart({ isOpen, toggleCart }) {
  const { count, setCount, setAppVisibility } = useCount();
  const navigate = useNavigate();

  const clearcart = () =>{
    setCount(0)
  }

  const handleVisibility = () =>{
    setAppVisibility(false)
  }



  return (
    <div className='cart-card'>
      <div className='cart-header'>
        <h4>Cart</h4>
      </div>
      <hr className='hr-line'></hr>

      <div className='products-in-cart'>

      <div className='cart-content'>
        {count === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <div className="content">
            <img src={image1} alt="productImg" className='product-thumb' />
            <div className="content-txt">
              Fall Limited Edition Sneakers <br />$125.00 x {count} <b>${count * 125}.00</b>
            </div>
            <FontAwesomeIcon icon={faTrashCan} style={{ color: "#afb0b1" }} className='dlt-btn' onClick={clearcart} />
            
          </div>
          
        )}
        
      </div>

  
      
      {count > 0 && (
         <AddtoCart className='checkout-btn' onClick={() => {
          navigate("/CheckoutPage");
          handleVisibility();
        }}>Checkout</AddtoCart>
        )}
     

        
      </div>


    </div>
  );
}

export default Cart;