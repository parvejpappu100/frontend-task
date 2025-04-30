import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ando from "../../assets/ando.png";
import apple from "../../assets/apple.png"
import frame from "../../assets/frame.png";

const Experience = () => {
    return (
        <div className='py-16 lg:py-28'>
            <SectionTitle
                title={"Restaurants"}
                titleBlack={"Enhance your experience,"}
            ></SectionTitle>
            <div className='max-w-[1200px] mx-auto px-4 relative'>
                <div className='max-w-[700px]'>
                    <h4 className='text-2xl  mt-3 lg:text-4xl font-semibold text-[#ED6923]'>Download the Tweet app today!</h4>
                    <p className='my-7'>Discover a whole new level of convenience with our mobile app. From browsing our delectable menu to securing exclusive deals, it's your gateway to a world of culinary delights. Download now and elevate your dining experience with just a tap.</p>
                    <div className='flex items-center flex-col lg:flex-row gap-5'>
                        <img src={ando} alt="" />
                        <img src={apple} alt="" />
                    </div>
                </div>
                <div className='bg-[#ED6923FA] my-10 px-16 py-20 rounded-2xl hidden lg:flex items-center gap-16 '>
                    <div className='text-white '>
                        <h4 className='text-3xl font-semibold'>100+</h4>
                        <p>Food Menu</p>
                    </div>
                    <div className='text-white '>
                        <h4 className='text-3xl font-semibold'>100+</h4>
                        <p>Downloads</p>
                    </div>
                    <div className='text-white '>
                        <h4 className='text-3xl font-semibold'>20+</h4>
                        <p>Positive Reviews</p>
                    </div>
                    <div className='text-white '>
                        <h4 className='text-3xl font-semibold'>4.7 </h4>
                        <p>Average Review</p>
                    </div>
                </div>
                <div className='lg:absolute bottom-16 right-16 mt-8 lg:mt-0'>
                    <img src={frame} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Experience;