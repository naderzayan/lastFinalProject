import React from 'react'
import '../style/components/_cartList.scss';
import { IoIosClose } from "react-icons/io";

export default function CartList({ showCartList, setShowCartList }) {
    return (
        <div className={`cart_list ${showCartList ? "active" : ""}`}>
            <p>Shopping Cart</p>
            <IoIosClose onClick={() => setShowCartList(false)} />
        </div>
    );
}
