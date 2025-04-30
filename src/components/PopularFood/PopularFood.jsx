import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa6";
import { GrRestaurant } from "react-icons/gr";
import { CiClock2, CiDiscount1 } from "react-icons/ci";
import { IoBicycle } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { RiPokerHeartsLine } from "react-icons/ri";



import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const PopularFood = () => {

    const [foods, setFoods] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        fetch("foods.json")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    return (
        <div className='py-16'>
            <div className='flex flex-col items-start lg:flex-row gap-3 lg:gap-0 lg:items-end lg:justify-between max-w-[1200px] mx-auto px-4'>
                <div>
                    <SectionTitle
                        title={"Popular Food"}
                        titleBlack={"Popular"}
                        titleOrange={"Food Near me"}
                    ></SectionTitle>
                </div>
                <div className='px-4 lg:px-0'>
                    <button className='border-2 border-[#ED6923] hover:bg-[#ED6923] hover:text-white duration-500 cursor-pointer rounded-md px-9 py-[6px] text-2xl font-medium text-[#ED6923]'>View All</button>
                </div>
            </div>
            <div className='max-w-[1400px] mx-auto px-4 mt-16 flex items-center gap-4'>
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
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                        className="mySwiper"
                    >
                        {
                            foods.map(food => (
                                <SwiperSlide key={food._id}>
                                    <div className='relative'>
                                        <div className=" h-[175px] rounded-t-xl overflow-hidden ">
                                            <img src={food.image} alt="Restaurant" className="w-full h-full object-cover" />

                                        </div>
                                        <div className='text-white  px-2 py-1 rounded-r-2xl font-semibold flex items-center gap-2 bg-[#ED6923] absolute top-5'>
                                            <CiDiscount1 />
                                            <p className='text-[12px]'>{food.discount}% off</p>
                                        </div>
                                        <div className=' px-2 py-1 rounded-2xl font-semibold flex items-center gap-2 bg-white absolute right-5 top-36'>
                                            <FaStar className='text-[#ED6923]'/>
                                            <p className='text-[12px]'>{food.ratings} ({food.reviews})</p>
                                        </div>
                                        <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center absolute right-5 top-5'>
                                            <RiPokerHeartsLine className='text-[#ED6923]'/>
                                        </div>

                                        <div className='bg-white p-3 rounded-b-xl h-[150px]'>
                                            <div className='flex items-center justify-between gap-3 mb-2 '>
                                                <div>
                                                    <h3 className='font-medium text-[18px]'>{food.name}</h3>
                                                </div>
                                                <div>
                                                    <p className='text-[12px] line-through text-[#767676]'>€{food.price}</p>
                                                    <p className='text-[#ED6923]'>€{(food.price - (food.price * (food.discount / 100))).toFixed(2)}</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between items-end'>
                                                <div>
                                                    <div className='flex items-center gap-2'>
                                                        <GrRestaurant />
                                                        <p> {food.restaurant_name} </p>
                                                    </div>
                                                    <div className='flex items-center gap-4 text-[12px] mt-2'>
                                                        <div className='flex items-center gap-2'>
                                                            <CiClock2 />
                                                            <p> {food.delivery_time} </p>
                                                        </div>
                                                        <div className='flex items-center gap-2'>
                                                            <IoBicycle />
                                                            <p> $0{food.delivery_fee} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className='w-8 h-8 bg-[#ED6923] text-white text-[20px] font-bold rounded-full cursor-pointer flex items-center justify-center'><FaPlus /></button>
                                                </div>
                                            </div>
                                        </div>
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

export default PopularFood;