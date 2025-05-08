import React from 'react'
import { IoStarSharp } from "react-icons/io5";

export default function Categories({ title, image, before, after, price }) {
  return (
    <div>

      <div className='mycategories'>
        
          <div className='collll'>
            {title}
            <div className='flexxxx'>
            <div className='starsss'>
              <IoStarSharp />
              <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
            </div>
            <div>
              {before}{after}{price}
              </div>

          </div>
          </div>
        
        



        <div>
          <img src={` ${image} `} alt="" />
        </div>


      </div>




    </div>
  )
}
