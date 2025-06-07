import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import CardCorousel from '../../components/CardCorousel/CardCorousel';
import Heading_man from '../../components/Heading/Heading_man';
import Heading_woman from '../../components/Heading/Heading_woman';
import Heading_children from '../../components/Heading/Heading_children';
import { data } from '../../../data/data';


const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div style={{ backgroundColor: '#f1f1f1' }}>
                <div>
                <div>
                    <Heading_man />
                </div>
                <div className='mt-[-7rem]  '>
                    <CardCorousel data={data} sectionName={"Formal"} />
                </div>
                <div className='mt-[-7rem]  '>
                    <CardCorousel data={data} sectionName={"Casual"} />
                </div>
                <div className='mt-[-7rem]  '>
                    <CardCorousel data={data} sectionName={"Asthatic"} />
                </div>
                </div>


                <div style={{ backgroundColor: '#f9f9f9' }}>
                <div className='mt-[7rem]'>
                    <Heading_woman />
                </div>
                <div className='mt-[-7rem]  '>
                    <CardCorousel data={data} sectionName={"Formal"} />
                </div>
                <div className='mt-[-7rem]  '>
                    <CardCorousel data={data} sectionName={"Casual"} />
                </div>
                <div className='mt-[-7rem]  '>
                    <CardCorousel data={data} sectionName={"Asthatic"} />
                </div>
                </div>


                <div style={{ backgroundColor: '#f1f1f1' }}>
                <div className='mt-[7rem]'>
                    <Heading_children />
                </div>
                <div className='mt-[-7rem]  '>
                    <CardCorousel data={data} sectionName={"Formal"} />
                </div>
                <div className='mt-[-7rem]  '>
                    <CardCorousel data={data} sectionName={"Casual"} />
                </div>
                <div className='mt-[-7rem]  '>
                    <CardCorousel data={data} sectionName={"Asthatic"} />
                </div>
            </div>
                </div>


           


        </div>
    );
}

export default HomePage;
