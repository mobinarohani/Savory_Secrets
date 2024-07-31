import React from 'react'
import './Hero.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Savory Secrets</h1>
            <p>Discover the stories behind the food, as we delve into the rich cultural traditions and personal experiences that inspire our culinary creations. From the farmer's market to the family table, we celebrate the joy of food and its power to bring people together.</p>
            <button className='btn'>Explore more<ArrowForwardIcon className='btn-icon'/></button>
        </div>
    </div>
  )
}
