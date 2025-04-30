import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const PopularCategory = () => {
    const [categories, setCategories] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        fetch("/category.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className='py-20'>
            <SectionTitle
                title={"Category"}
                titleBlack={"Popular"}
                titleOrange={"Category"}
            />
            <div className='max-w-[1400px] mx-auto px-4 my-16 flex items-center gap-4'>
                <button className='cursor-pointer bg-white w-12 h-12 rounded-full lg:flex justify-center items-center shadow-md hidden' onClick={() => swiperRef.current?.slidePrev()}>
                    <FaArrowLeft />
                </button>
                <div className='max-w-[1200px] mx-auto px-4 w-full'>
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        slidesPerView={2} 
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 7,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper"
                    >
                        {
                            categories.map(category => (
                                <SwiperSlide key={category._id}>
                                    <div>
                                        <img src={category.image} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <button className='cursor-pointer bg-white w-12 h-12 rounded-full lg:flex justify-center items-center shadow-md hidden' onClick={() => swiperRef.current?.slideNext()}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default PopularCategory;
