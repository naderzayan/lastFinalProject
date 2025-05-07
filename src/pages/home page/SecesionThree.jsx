import React from 'react'
import DiscountProduct from './DiscountProduct'
import { productData } from '../../data/DataOfSecesion3'

export default function SecesionThree() {
  return (
      <main>
          <h3 className="titleOfSecesion">Discount Product</h3>
          <div className="containerOfDiscount">
              {productData.map((ele) => (
                  <DiscountProduct key={ele.id} image={ele.image} title={ele.title} Category={ele.Category} beforPrice={ele.beforPrice} afterPrice={ele.afterPrice} />
              ))}
          </div>
      </main>
  );
}
