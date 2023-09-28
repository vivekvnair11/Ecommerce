import { useCount } from '../App';
import logo from '../images/logo.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import Cart from './Cart';






function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const { count } = useCount();

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const togglecart = () =>{
    setSmShow(!smShow);
  }
  

  return (
    
    <>
    <div className="navbar">

    <div className="nav">
      
      
            {/* <div className='mobile-sidebar'>
                <FontAwesomeIcon icon={faBars} className='hamburger' onClick={handleClick} />
                <FontAwesomeIcon icon={faXmark} onClick={handleClick}  />
    
            </div> */}
{isOpen &&(
<div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
      
        <FontAwesomeIcon icon={faTimes} className='close-icon' onClick={closeSidebar} />

        <ul className="mob-content">
        <li>
          <a>Collections</a>
        </li>
        <li>
          <a>Men</a>
        </li>
        <li>
          <a>Women</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      </div>)}

  
      <div className={`hamburger ${isOpen ? 'hidden' : ''}`} onClick={openSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>

    <img src={logo} className="logo" alt="logo" />
      <ul className="nav-mob">
        <li>
          <a>Collections</a>
        </li>
        <li>
          <a>Men</a>
        </li>
        <li>
          <a>Women</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>




    

             <div className= "nav-left">
             <Badge color="secondary" badgeContent={count}>
        <ShoppingCartIcon onClick={togglecart} />
        </Badge>
                <FontAwesomeIcon icon={faUser} />
             </div>

          
            
  </div><hr className='hr-line'></hr>
  {smShow && <Cart isOpen={smShow} />}
  </>       )
}
export default Navbar
