import React from 'react'
import './Navbar.css'
import logoNavbar from '../../img/logo.png'
export default function Navbar() {
  return (
    <nav className='navbar__Container'>
        <div className='navbar__left'>
            <img src={logoNavbar} alt=""  className='navbar__logo'/>
            <span>Savory Secrets</span>
        </div>
        
        <ul className='navbar__right'>
            <li>Home</li>
            <li>Menu</li>
            <li>About us</li>
            <li>Foods</li>
            <li>Drinks</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}
