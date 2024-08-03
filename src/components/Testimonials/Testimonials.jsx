import React, { useRef, useState } from 'react'
import './Testimonials.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import recipes1 from '../../img/recipes1.jpg'
import recipes2 from '../../img/recipes2.jpg'
import recipes3 from '../../img/recipes3.jpg'
import recipes4 from '../../img/recipes4.jpg'
import recipes5 from '../../img/recipes5.jpg'
import recipes6 from '../../img/recipes6.jpg'
import recipes7 from '../../img/recipes7.jpg'
import recipes8 from '../../img/recipes8.jpg'
import recipes9 from '../../img/recipes9.jpg'
export default function Testimonials() {

    const [foods, setFoods] = useState([
        { id: 1, title: 'food recipes', img: recipes1, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.' },
        { id: 2, title: 'food recipes', img: recipes2, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.' },
        { id: 3, title: 'food recipes', img: recipes3, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.' },
        { id: 4, title: 'food recipes', img: recipes4, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.' },
        { id: 5, title: 'food recipes', img: recipes5, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.' },
        { id: 6, title: 'food recipes', img: recipes6, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.' },
        { id: 7, title: 'food recipes', img: recipes7, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.' },
        { id: 8, title: 'food recipes', img: recipes8, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.' },
        { id: 9, title: 'food recipes', img: recipes9, des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quisquam dolore dignissimos exercitationem accusamus consequuntur quidem amet consectetur distinctio quibusdam sequi magni corporis unde, illo tempora numquam impedit eius quas.' },
    ])

    const sliderUL = useRef();
    let TranslateX = 0;

    const slideForward = () => {

        if (TranslateX > -50) {
            TranslateX -= 11.1;
        }
        sliderUL.current.style.transform = `translateX(${TranslateX}%)`
    }

    const slideBackward = () => {
        if (TranslateX < 0) {
            TranslateX += 11.1;
        }
        sliderUL.current.style.transform = `translateX(${TranslateX}%)`
    }

    return (
        <div className="container">
            <div className='testimonials'>
                <NavigateNextIcon className='next-btn' onClick={slideForward} />
                <NavigateBeforeIcon className='back-btn' onClick={slideBackward} />
                <div className="slider">
                    <ul ref={sliderUL}>
                        {foods.map(food => (
                            <li className="slid">
                                <div className="userInfo">
                                    <img src={food.img} alt="picture" />
                                    <div>
                                        <h3>{food.title}</h3>
                                    </div>
                                </div>
                                <p>{food.des}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
