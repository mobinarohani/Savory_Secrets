import React, { useRef } from 'react'
import './Testimonials.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import gallery1 from '../../img/gallery1.jpg'
export default function Testimonials() {

    const sliderUL=useRef();
    let TranslateX=0;

    const slideForward=()=>{

        if(TranslateX>-50){
            TranslateX-=25;
        }
        sliderUL.current.style.transform=`translateX(${TranslateX}%)`
    }

    const slideBackward=()=>{
        if(TranslateX<0){
            TranslateX+=25;
        }
        sliderUL.current.style.transform=`translateX(${TranslateX}%)`
    }

  return (
    <div className='testimonials'>
        <NavigateNextIcon className='next-btn' onClick={slideForward}/>
        <NavigateBeforeIcon className='back-btn'onClick={slideBackward}/>
        <div className="slider">
            <ul ref={sliderUL}>
                <li>
                    <div className="slid">
                        <div className="userInfo">
                            <img src={gallery1} alt=""/>
                            <div>
                                <h3>William Jackson</h3>
                                <span></span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.</p>
                    </div>
                </li>
                <li>
                    <div className="slid">
                        <div className="userInfo">
                            <img src={gallery1} alt=""/>
                            <div>
                                <h3>William Jackson</h3>
                                <span></span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.</p>
                    </div>
                </li>
                <li>
                    <div className="slid">
                        <div className="userInfo">
                            <img src={gallery1} alt=""/>
                            <div>
                                <h3>William Jackson</h3>
                                <span></span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.</p>
                    </div>
                </li>
                <li>
                    <div className="slid">
                        <div className="userInfo">
                            <img src={gallery1} alt=""/>
                            <div>
                                <h3>William Jackson</h3>
                                <span></span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.</p>
                    </div>
                </li>
                <li>
                    <div className="slid">
                        <div className="userInfo">
                            <img src={gallery1} alt=""/>
                            <div>
                                <h3>William Jackson</h3>
                                <span></span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
