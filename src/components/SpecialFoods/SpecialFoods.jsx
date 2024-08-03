import React from 'react'
import './SpecialFoods.css'
import food1 from '../../img/food-1.jpg'
import food2 from '../../img/food-2.jpg'
import food3 from '../../img/food-3.jpg'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
export default function SpecialFoods() {
    return (
        <div className='foods container' id='SpecialFoods'>
            <div className="food">
                <img src={food1} alt="" srcset="" />
                <div className="caption">
                    <RestaurantMenuIcon className='caption-icon'/>
                    <p>Price: 25$</p>
                </div>
            </div>
            <div className="food">
                <img src={food2} alt="" srcset="" />
                <div className="caption">
                    <RestaurantMenuIcon className='caption-icon'/>
                    <p>Price: 30$</p>
                </div>
            </div>
            <div className="food">
                <img src={food3} alt="" srcset="" />
                <div className="caption">
                    <RestaurantMenuIcon className='caption-icon'/>
                    <p>Price: 80$</p>
                </div>
            </div>
        </div>
    )
}
