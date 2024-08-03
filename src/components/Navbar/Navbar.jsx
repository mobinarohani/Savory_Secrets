import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logoNavbar from '../../img/logo.png'
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-scroll';
export default function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>550?setSticky(true):setSticky(false)
    })
  },[])

  const[mobileMenu,setMobileMenu]=useState(false)

  const toggleMenu=()=>{
    setMobileMenu(prev=>!prev)
  }

  return (
    <nav className={`container ${sticky? 'navbar__Container':''}`}>
      <div className='navbar__left'>
        <img src={logoNavbar} alt="" className='navbar__logo' />
        <span>Savory Secrets</span>
      </div>

      <ul className={`navbar__right ${mobileMenu ? '':'hide-mobile-menu'}`}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='SpecialFoods' smooth={true} offset={-200} duration={500}>Special Foods</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='gallery' smooth={true} offset={-200} duration={500}>Gallery</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-200} duration={500}>Recipes</Link></li>
        <li><Link to='contact' smooth={true} offset={-200} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <MenuIcon className='nav__menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}
