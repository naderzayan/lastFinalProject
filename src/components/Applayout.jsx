import React, { useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import LastFooter from './LastFooter'
import { Outlet } from 'react-router'
import CartList from './CartList'

export default function Applayout() {
  const [showCartList ,setShowCartList] = useState(false)
  return (
      <div>
          <Header />
          <hr />
          <NavBar setShowCartList={setShowCartList} />
          <CartList setShowCartList={setShowCartList} showCartList={showCartList} />
          <hr />
          <Outlet />
          <Footer />
          <LastFooter />
      </div>
  );
}
