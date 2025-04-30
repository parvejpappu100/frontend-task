import React, { useEffect, useState } from 'react';
import container from "../../assets/container.png";
import SectionTitle from '../SectionTitle/SectionTitle';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Rating, Star } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    const [clientSays, setClientSays] = useState([]);

    useEffect(() => {
        fetch("testimonial.json")
            .then(res => res.json())
            .then(data => setClientSays(data))
    }, []);

    const whiteColor = {
        itemShapes: Star,
        activeFillColor: '#ffffff',
        inactiveFillColor: 'rgba(255, 255, 255, 0.3)',
    };

    return (
        <div className='max-w-[1200px] mx-auto px-4 py-20 flex flex-col lg:flex-row-reverse items-center justify-between'>
            <div className=''>
                <img src={container} alt="" />
            </div>
            <div className='max-w-[490px] px-12 lg:px-0 '>
                <SectionTitle
                    title={"Testimonial"}
                    titleBlack={"What"}
                    titleOrange={"Customer Saying"}
                ></SectionTitle>
                <h4 className='text-2xl lg:text-4xl font-semibold px-4 mt-2'>About our Services</h4>
                <div className='w-full mt-16'>
                    <Swiper
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={true}
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={10}

                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                        }}
                        className="mySwiper "
                    >
                        {
                            clientSays?.map(review => <SwiperSlide
                                className='pb-8'
                                key={review._id}
                            >
                                <div className=' border border-[#f0c1a8] shadow-sm p-7 rounded-lg'>
                                    <div className='flex items-end'>
                                        <div className='flex gap-2 items-start'>
                                            <span><FaQuoteLeft className='text-[#ED6923] text-3xl' /></span>
                                            <span className='text-[16px]'> {review.review} </span>
                                        </div>
                                        <span><FaQuoteRight className='text-[#ED6923] text-3xl' /></span>
                                    </div>
                                    <div className='mt-7 flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <img src={review.image} alt="" />
                                            <div>
                                                <h3 className='text-xl font-semibold'>{review.name}</h3>
                                                <p className='text-[12px]'>{review.title}</p>
                                            </div>
                                        </div>
                                        <div className='bg-[#ED6923] px-3 py-1 rounded '>
                                            <Rating style={{ maxWidth: 100 }} itemStyles={whiteColor} value={review.rating} readOnly />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;