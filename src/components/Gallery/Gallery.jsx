import React from 'react'
import './Gallery.css'
import gallery1 from '../../img/gallery1.jpg'
import gallery2 from '../../img/gallery2.jpg'
import gallery3 from '../../img/gallery3.jpg'
import gallery4 from '../../img/gallery4.jpg'
import EastIcon from '@mui/icons-material/East';
export default function Gallery() {
  return (
    <div className='gallery container'>
        <div className="gallery__container">
            <img src={gallery1} alt="" className='gallery__container-img'/>
            <img src={gallery2} alt="" className='gallery__container-img'/>
            <img src={gallery3} alt="" className='gallery__container-img'/>
            <img src={gallery4} alt="" className='gallery__container-img'/>
        </div>
        <button className='gallery__container-btn btn'>See more here<EastIcon className='btn-icon'/></button>
    </div>
  )
}

