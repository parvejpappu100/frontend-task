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

const PopularRestaurant = () => {

    const [restaurants, setRestaurants] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        fetch("restaurant.json")
            .then(res => res.json())
            .then(data => setRestaurants(data))
    }, []);

    return (
        <div className='py-16'>
            <div className='flex flex-col items-start lg:flex-row gap-3 lg:gap-0 lg:items-end lg:justify-between max-w-[1200px] mx-auto px-4'>
                <div>
                    <SectionTitle
                        title={"Popular Restaurant"}
                        titleBlack={"Popular"}
                        titleOrange={"Restaurant Near me"}
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
                            restaurants.map(restaurant => (
                                <SwiperSlide key={restaurant._id}>
                                    <div className='relative'>
                                        <div className=" h-[175px] rounded-t-xl overflow-hidden ">
                                            <img src={restaurant.image} alt="Restaurant" className="w-full h-full object-cover" />

                                        </div>
                                        <div className='text-white  px-2 py-1 rounded-r-2xl font-semibold flex items-center gap-2 bg-[#ED6923] absolute top-5'>
                                            <CiDiscount1 />
                                            <p className='text-[12px]'>{restaurant.discount}% off</p>
                                        </div>
                                        <div className=' px-2 py-1 rounded-2xl font-semibold flex items-center gap-2 bg-white absolute right-5 top-36'>
                                            <FaStar className='text-[#ED6923]' />
                                            <p className='text-[12px]'>{restaurant.ratings} ({restaurant.reviews})</p>
                                        </div>

                                        <div className='bg-white p-3 rounded-b-xl '>
                                            <div className=' mb-2 '>
                                                <div>
                                                    <h3 className='font-medium text-[18px]'>{restaurant.restaurant_name}</h3>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <div className='flex items-center gap-4 text-[12px] mt-2'>
                                                    <div className='flex items-center gap-2'>
                                                        <CiClock2 />
                                                        <p className='text-[#ED6923]'> {restaurant.delivery_time} </p>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <IoBicycle />
                                                        <p className='text-[#ED6923]'>Delivery Fee $0{restaurant.delivery_fee} </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='text-[12px] mt-2 text-[#767676]'>{restaurant.items}</p>
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

export default PopularRestaurant;