import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Add-to-cart/AddtoCart.css';

function AddtoCart({ children, showIcon,onClick }) { // Use destructuring to get the "children" prop
  return (
    <div className='addproduct'>
      <button className='cart-button addcart' onClick={onClick}>
      {showIcon && <ShoppingCartIcon />} {children}
      </button>
    </div>
  );
}

export default AddtoCart;
