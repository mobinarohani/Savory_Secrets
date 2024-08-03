import React from 'react'
import './Description.css'
import foodstuffs1 from '../../img/Foodstuffs1.jpg'
import foodstuffs2 from '../../img/Foodstuffs2.jpg'
import foodstuffs3 from '../../img/Foodstuffs3.jpg'
export default function Description() {
    return (
        <div className='description container'>
            <div className="description__Back"></div>
            <div className="descriptionList">
                <div className="descriptionItem des-item1">
                    <div className='descriptionItem-img'>
                        <img src={foodstuffs1} alt="" />
                    </div>
                    <span className='descriptionItem-info'>Foodstuffs refer to the basic ingredients or raw materials used in the preparation of various dishes and cuisines. These can include fresh fruits and vegetables, meats, fish, grains, legumes, dairy products, oils, spices, and other condiments. The quality and freshness of these foodstuffs play a crucial role in determining the taste, texture, and nutritional value of the final dishes.
                        When it comes to selecting foodstuffs, it's essential to consider factors such as seasonality, sustainability, and local sourcing.
                    </span>
                </div>
                <div className="descriptionItem des-item2">
                    <span className='descriptionItem-info'>Using fresh, locally sourced ingredients not only ensures that the food is of the highest quality but also supports the local community and reduces the environmental impact of transportation.
                        Restaurants often have a diverse menu, offering a wide range of dishes to cater to different tastes and dietary preferences. Therefore, they need to stock a variety of foodstuffs to accommodate various culinary options. These may include organic, non-GMO, gluten-free, vegan, and vegetarian options, as well as dishes that cater to specific dietary requirements or restrictions.
                    </span>
                    <div className='descriptionItem-img'>
                        <img src={foodstuffs2} alt="" />
                    </div>
                </div>
                <div className="descriptionItem des-item3">
                    <div className='descriptionItem-img'>
                        <img src={foodstuffs3} alt="" />
                    </div>
                    <span className='descriptionItem-info'>
                        In addition to the quality and variety of foodstuffs, restaurants also need to consider factors such as food safety, storage, and presentation. Proper storage and handling of foodstuffs is crucial to prevent spoilage and maintain their freshness and nutritional value. Restaurants also need to ensure that their food is attractively presented, as the visual appeal of dishes can significantly impact the dining experience.
                        In summary, foodstuffs are the essential building blocks of any restaurant, and selecting the right combination of ingredients is crucial to delivering a delicious, satisfying, and nutritious dining experience to customers.
                    </span>
                </div>
            </div>
        </div >
    )
}
