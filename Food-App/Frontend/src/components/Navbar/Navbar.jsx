import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {

   const[menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} className='logo' alt="logo" />
      <ul className='navbar-menu'>
        <li onClick={() =>setMenu("home")} className={menu==="home"?'underline':""}>home</li>
        <li onClick={() =>setMenu("menu")} className={menu==="menu"?'underline':""}>menu</li>
        <li onClick={() =>setMenu("mobile-app")} className={menu==="mobile-app"?'underline':""}>mobile-app</li>
        <li onClick={() =>setMenu ("contact-us")} className={menu==="contact-us"?'underline':""}>contact-us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="basket" />
            <div className="dot"></div>
        </div>
        <div className="sign-in">
            <button>Sign-In</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
