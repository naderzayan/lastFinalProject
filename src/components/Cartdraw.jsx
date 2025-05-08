import { React, useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CounterContext } from './CounterContextt'
import { ImCancelCircle } from "react-icons/im";




export default function Cartdraw({ image, title, quan, price }) {
  


  
   
  

const [Cart, setCart]=useState([]);

  const handleRemoveItem = (price) => {
    const cartItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    const updatedCart = cartItems.filter(item => item.price !== price);
    localStorage.setItem("savedItems", JSON.stringify(updatedCart));
    setCart(updatedCart); 
  }

  
   
  


  const { myCounter, setmyCounter } = useContext(CounterContext);



  useEffect(() => {
    const uc = () => {
      let itemz = JSON.parse(localStorage.getItem("savedItems")) || [];
      const total = itemz.reduce((sum, item) => sum + item.quantity, 0



      )
      setmyCounter(total)

    }
    uc();

  }, [



  ])
  const que = () => {

    let cart = JSON.parse(localStorage.getItem("savedItems")) || [];


    let itemIndex = cart.findIndex(item => item.price === price);

    if (itemIndex !== -1) {

      cart[itemIndex].quantity += 1;

    } else {

      cart.push({ id: product, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("savedItems", JSON.stringify(cart));


  }

  const quee = () => {

    let cart = JSON.parse(localStorage.getItem("savedItems")) || [];


    let itemIndex = cart.findIndex(item => item.price === price);

    if (itemIndex !== -1 && cart[itemIndex].quantity !== 0) {

      cart[itemIndex].quantity -= 1;

    } else {

      cart.push({ id: product, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("savedItems", JSON.stringify(cart));


  }












  return (
    <div >

    
   
      <div className='tablepdt'  >
        <div className='cell '    onClick={() => handleRemoveItem(price)}  >    <ImCancelCircle /></div>
        <div className='cell '>
     <div className='cellulartitle'>
        {title}</div>
   

      </div>
      <div className='imgcell '>
      <img src={` ${image} `} alt="" /></div>


    
        <div className='cell cellularprice'>    $ {price}</div>
        <div className='cell flexoo'>     <div className='incbox' onClick={que}>+</div>    {quan}   <div className='incbox' onClick={quee}>-</div>
        </div>
     
<div className='cell cellularsub'>${price}</div>


      
      </div>

      

    


    
  
  


   








    </div>
  )
}
