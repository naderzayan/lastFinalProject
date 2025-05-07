import React from 'react'
import { GrMapLocation } from "react-icons/gr";
import { Link } from 'react-router';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import '../style/components/_footer.scss'

export default function Footer() {
  function scrollfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className='footer'>
      <div>
        <h3>Got Question? Call Us 24/7</h3>
        <h4>[80] 1017 197</h4>
        <p>NW1 8JR, UK</p>
        <button>
          <GrMapLocation />
          <Link to={"https://www.google.com/maps/place/221B+Baker+St,+London+NW1+6XE,+UK/@51.523767,-0.1585557,17z/data=!3m1!4b1!4m6!3m5!1s0x48761acf33628211:0x445d7677a88322e1!8m2!3d51.523767!4d-0.1585557!16s%2Fg%2F11bw4hsx_m?hl=en&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"}>View On Map</Link>
        </button>
      </div>
      <div>
        <p>We Using</p>
        <p>Safe Payments</p>
        <h3>Secured By:</h3>
      </div>
      <div>
        <h3>Quick Links</h3>
        <p className='quick_store'>Support Center</p>
        <p className='quick_store'>Term & Conditions</p>
        <p className='quick_store'>Shipping</p>
        <p className='quick_store'>Privacy Policy</p>
        <p className='quick_store'>Help</p>
        <p className='quick_store'>Products Return</p>
        <p className='quick_store'>FAQS</p>
      </div>
      <div>
        <h3>Our Stores</h3>
        <p className='quick_store'>New York</p>
        <p className='quick_store'>London SF</p>
        <p className='quick_store'>Cockfosters BP</p>
        <p className='quick_store'>Los Angeles</p>
        <p className='quick_store'>Chicago</p>
        <p className='quick_store'>Las Vegas</p>
        <p className='quick_store'>Albarto</p>
      </div>
      <div>
        <img src="footer-logo.png" alt="" />
        <button onClick={scrollfunction}>BACK TOP <FaRegArrowAltCircleUp /></button>
      </div>
    </div>
  )
}
