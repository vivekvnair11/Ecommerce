import './App.css';
import React, { createContext, useContext, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Image from './components/Image/Image';
import Count from './components/Count/Count';
import ProductDescription from './components/Product description/ProductDescription';
import CheckoutPage from './components/Paymentcontainer/CheckoutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ImageCorousal from './components/Pop-Up-Image/ImageCorousal';
import { useEffect } from 'react';

const CountContext = createContext();

export function useCount() {
  return useContext(CountContext);
}

function App() {
  
  const [isAppVisible, setAppVisibility] = useState(true);

    const [count, setCount] = useState(0);


  return (
    <Router>
    <CountContext.Provider value={{ count, setCount , setAppVisibility}} >
    {isAppVisible && ( <div className="App ">
        <Navbar></Navbar>
        <div className='Home'>

        <Image></Image>
        <ProductDescription className="productdescription"></ProductDescription>

        </div>
       
     
  
     
      
      </div> )}
     
     

   
<Routes>

<Route path="/cart" component={Cart} />
          <Route path="/CheckoutPage" element={<CheckoutPage/>} />
         

</Routes>


    </CountContext.Provider></Router>


  
  );
}

export default App;
