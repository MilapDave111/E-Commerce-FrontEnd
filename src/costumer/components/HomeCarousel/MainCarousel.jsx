import React from 'react'
import { HomeCarouselData, MainCorouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';
;


const MainCarousel = () => {

    const items = HomeCarouselData.map((item) => <img className='curser-pointer' 
    role="presentation" src={item.image} alt=''/>)

    return(
       
            <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite 
            />
          
    )
}

export default MainCarousel;