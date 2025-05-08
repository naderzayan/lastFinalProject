import React from 'react'
import { useState, useEffect } from 'react';
import Checkoutpdt from './Checkoutpdt';

export default function

  () {


  const [Text, setText] = useState("");
  const [Text1, setText1] = useState("");
  const [Text2, setText2] = useState("");
  const [Text3, setText3] = useState("");
  const [Text4, setText4] = useState("");


  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  }


  const [val, setval] = useState([]);


  let stored = []

  useEffect(() => {
    const stored = localStorage.getItem("savedItems");
    if (stored) {
      setval(JSON.parse(stored));

    }


  }, []);

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













  return (
    <div className='flexcheckout' >
      <div className='inputscol'>



        <div className='inputflex'>
          <div className='firstnamecell'>
            First name
          </div>

          <input
            type="text"
            value={Text}
            onChange={(e) => setText(e.target.value)}
            placeholder="">

          </input>
        </div>




        <div className='inputflex'>

          

            <div className='firstnamecell'> last name</div>


            <div>
              <input
                type="text"
                value={Text1}
                onChange={(e) => setText1(e.target.value)}
                placeholder="">

              </input>
            </div>
          

        </div>

        <div className='inputflex'>
          <div className='firstnamecell'>   Street address
          </div>

          <input
            type="text"
            value={Text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="">

          </input>
        </div>

        <div > <form >
          <label className='country'>
            Country / Region<span style={{ color: 'red' }}>*</span>
          </label>
          <select value={country} onChange={handleChange} required>
            <option value="">Select a country</option>
            <option value="Egypt">Egypt</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
          </select>
        </form></div>




        <div className='inputflex'>

          <div className='firstnamecell' >  Phone number</div>


          <input
            type="number"
            value={Text3}
            onChange={(e) => setText3(e.target.value)}
            placeholder="">

          </input>
        </div>
        <div className='inputflex'>
          <div className='firstnamecell'>
            email address</div>
          <input
            type="email"
            value={Text4}
            onChange={(e) => setText4(e.target.value)}
            placeholder="">

          </input>

        </div>
        <div>
          <button>Place Order</button>
        </div>


      </div>




      <div className='yourorder '>
        <div className='tblflx'>
          <div className='redtitle '>Product</div>

          <div className='redtitle'>subtotal</div>
        </div>

        <div className='columncheckout'>
          {val.map((ele, index) =>
            (<Checkoutpdt image={ele.image} title={ele.title} price={ele.price} quan={ele.quantity} />)
          )}


        </div>
        <div className='doflexx'>
          <div className='flexwrd2'>Subtotal:</div>
          <div className='flexwrd'>${Total}</div>
        </div>

        <div className='doflexx'>
          <div className='flexwrd2'>Shipping:</div>
          <div className='flexwrd'>FREE</div>
        </div>

        <div className='doflexx'>
          <div className='flexwrd2'>Total:</div>
          <div className='flexwrd'>${Total}</div>
        </div>





      </div>







    </div >
  )
}
