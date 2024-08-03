import React from 'react'
import './Menu.css'
import menu1 from '../../img/menu1.png'
import menu2 from '../../img/menu2.png'
import menu3 from '../../img/menu3.png'
import menu4 from '../../img/menu4.png'
export default function Menu() {
  return (
    <div className='menu container'>
        <div className="menuList">
            <div className="menuItem">
                <img src={menu1} alt="" />
                <button className='btn'>See more ...</button>
            </div>
            <div className="menuItem">
                <img src={menu2} alt="" />
                <button className='btn'>See more ...</button>
            </div>
            <div className="menuItem">
                <img src={menu3} alt="" />
                <button className='btn'>See more ...</button>
            </div>
            <div className="menuItem">
                <img src={menu4} alt="" />
                <button className='btn'><span>See more ...</span></button>
            </div>
        </div>
    </div>
  )
}
