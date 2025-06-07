import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

// import { data } from '../../../data/data';
import Card from '../Card/Card';

const CardCorousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: {
            items: 1
        },
        720: {
            items: 3
        },
        1024: {
            items: 5.1,
        },
    };

    const items = data.map((item, index) => <Card product={item} key={index} />);



    return (
        <div className='lg:px-[-15rem]'>
            <h1 className='text-2 text-gray-800 p-[7rem]'>{sectionName}</h1>
          <center>  <div className='relative my-[-7rem]'>
                <AliceCarousel 
                    items={items}
                    responsive={responsive}
                    // disableButtonsControls
                    disableDotsControls
                    autoPlay
                    autoPlayInterval={2000}
                    // infinite
                    activeIndex={activeIndex}
                    onSlideChanged={({ item }) => setActiveIndex(item)}
                />


            </div></center>
        </div>
    );
}

export default CardCorousel;