import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Cartdraw from './Cartdraw';
import Checkout from './Checkout';

export default function Thecart() {
  const [Total, setTotal] = useState(0);

  useEffect(() => {

    const storedCart = localStorage.getItem("savedItems");
    if (storedCart) {
      const cart = JSON.parse(storedCart);
      if (Array.isArray(cart)) {
        const totalPrice = cart.reduce((sum, item) => {
          return sum + (item.price || 0) * (item.quantity || 0);
        }, 0);
        setTotal(totalPrice);
      }
    }


  }, []);


  const [val, setval] = useState([]);


  let stored = []

  useEffect(() => {
    const stored = localStorage.getItem("savedItems");
    if (stored) {
      setval(JSON.parse(stored));
      console.log(stored)
    }


  }, []);







  return (
    <div >



      <div className='table '>

        <div className='empty cell'></div>
        <div className='empty cell'></div>
        <div className='cell pdt'>product</div>
        <div className='cell price'> price</div>
        <div className='cell quantity'>quantity</div>

        <div className='cell subtotal'>subtotal</div>
      </div>

      {val.map((ele, index) =>
        (<Cartdraw image={ele.image} title={ele.title} price={ele.price} quan={ele.quantity} />)
      )}


    

<div className='position-right'>
  <h3>CART TOTAL</h3>
  <div className='carttotal'>
<div className='justtt'>
<div className='colii'>
<div>    Subtotal:</div>
<div>Shipping:</div>
<div>Total:</div>
</div>
<div className='colii'>
  <div>${Total}</div>
  <div>FREE SHIPPING</div>
  <div>${Total}</div>

</div>




</div>

 



    
  </div>
  <div className='chkbtn'>
          <Link to={"/Checkout"}><button>Proceed To Checkout</button></Link>

              

        </div>













</div>
        

      

      </div>






    
  )
}
