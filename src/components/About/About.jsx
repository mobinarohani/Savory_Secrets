import React from 'react'
import './About.css'
import AboutImg from '../../img/logo1.jpg';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
export default function About({setPlayState}) {
  return (
    <div className='Container-about'>
      <div className='about container'>
        <div className="about-left"  onClick={()=>{setPlayState(true)}}>
          <img src={AboutImg} alt="" className='about-img'/>
          <PlayCircleIcon className='about-icon'/>
        </div>
        <div className="about-right">
          <h3 className='about-right-title'>ABOUT OUR RESTAURANT</h3>
          <h3 className='about-right-phone'>"Enter the World of Flavors and Uncover Savory Secrets"</h3>
          <p>At the heart of our eatery is a team of talented chefs, each with their own unique culinary expertise and a shared dedication to showcasing the finest, locally-sourced ingredients. From our seasonal menu and daily specials to our carefully curated wine list, every aspect of your dining experience has been thoughtfully crafted to delight your senses and leave a lasting impression.</p>
          <p>Step into our inviting atmosphere, where the aroma of freshly prepared dishes, the warm glow of candlelight, and the sounds of lively conversation create a truly magical ambiance. Whether you're celebrating a special occasion, enjoying a romantic evening, or simply indulging in a delicious meal with family and friends, our restaurant is the perfect setting to savor the art of living well.</p>
        </div>
      </div>
    </div>

  )
}
