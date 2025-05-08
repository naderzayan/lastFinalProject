import React, { useRef } from 'react'

import Homepage from './component/Homepage'
import Shopdata from './component/Shopdata'
import Thewatches from './component/Thewatches'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Myratingpdt from './Myratingpdt'
import { watchdata } from './component/Homedata'





export default function Shop() {

 


  return (
    <div >


      <div> <Homepage /></div>

      <div className='homeshop '>
        <div className='HOMESHOPP'>
          <Link to={"/"}>Home</Link>
          <div>  > Shop</div>


        </div>





      </div>


      <div className='needjustify'>

        <div className='thestart'>
        
          

         <div className='myratingpdt'>

          <div className='mypdthead'> Products By Rating</div>
          <div className='expand'>    < Myratingpdt/></div>
          
          
          
          
          </div>



          <div className='thecatt'>
          
            <div className='prodcat'>  Product Category</div>
            
            <div> <Shopdata /></div>
          
            
          </div> 

          <div className='rateapi banpic'>


            <img src="\src\banner.png" />




          </div>




        </div>


        <div className='mywatches'>

          <div className='shop-bar'>

            <div className='alone'>Shop</div>
            {/* <div className='sort'>sort by sorting</div>
            <div className='mysvg'>
              svgg

            </div> */}


          </div>
<div className='mymywatches'>   <Thewatches /></div>
        
        </div>







      </div>












    </div>

  )
}

