import React from 'react'
import '../style/components/_header.scss'
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePolicy } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { Link } from 'react-router';
export default function Header() {
  return (
      <div className="header">
          <div className="header">
              <p className="item_header">
                  <CiDeliveryTruck /> Free Delivery
              </p>
              <hr  className='hrHeader'/>
              <p className="item_header">
                  <MdOutlinePolicy /> Returns Policy
              </p>
              <hr className='hrHeader'/>
              <p className="follow">
                  Follow Us On
                      <FaFacebook />
                      <FaSquareXTwitter />
                      <FaInstagramSquare />
                      <FaSquarePinterest />
              </p>
          </div>
          <p className="item_header">
              <Link to={"/Login"} className="login">
                  Login
              </Link>
          </p>
      </div>
  );
}
