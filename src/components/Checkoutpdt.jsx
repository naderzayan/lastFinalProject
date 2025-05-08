import React from 'react'

export default function Checkoutpdt({ image, title, price, quan }) {
  return (
    <div className='finalcheck'>
      <div className='quanflex'>
        <div className='cellz2 flexwrd2'><div>{title}</div>
          <div> x</div>
          <div>  {quan}</div>
        </div>


        <div className='cellzquan flexwrd2'>




          ${price * quan}</div>
        <div></div>




        <div>

        </div>
      </div>




    </div>
  )
}
