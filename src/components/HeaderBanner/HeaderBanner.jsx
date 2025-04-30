import React from 'react';
import people from "../../assets/people.png";
import icon from "../../assets/Icon.png";
import avatar from "../../assets/Avatar.png";
import restaurant from "../../assets/restaurent.png";
import { TiStarFullOutline } from "react-icons/ti";
import { RiPokerHeartsLine } from "react-icons/ri";
import { FaLocationCrosshairs } from "react-icons/fa6";




const HeaderBanner = () => {
    return (
        <div className='bg-gradient-to-r from-[#FEDFCF] to-[#FDEDE5] pt-16 pb-36'>
            <div className='max-w-[1200px] mx-auto px-4 flex flex-col-reverse gap-16 lg:gap-0 lg:flex-row items-center justify-between'>
                <div>
                    <h3 className='text-3xl lg:text-[80px] text-[#ED6923] font-medium rancho-font'>
                        Hungry?
                    </h3>
                    <h4 className='font-semibold text-3xl lg:text-6xl my-6'>Let Us <span className='text-[#ED6923] '>Bring</span></h4>
                    <h5 className='text-3xl lg:text-6xl text-[#ED6923] font-semibold'>The Feast to You</h5>
                    <p className='my-8'>Explore hundreds of delicious options from top restaurants and <br />  Enjoy fast, reliable delivery right to you.</p>
                    <div className='relative'>
                        <div className='flex items-center mt-4 lg:w-[500px]'>
                            <input className='bg-white px-3 py-4 border border-[#ED6923] text-[12px] rounded-tl-[6px] rounded-bl-[6px] w-full' placeholder='Enter your location' id="" />
                            <button className='bg-[#ED6923] text-white px-4 py-[15px] font-semibold rounded-tr-[6px] rounded-br-[6px] cursor-pointer w-[150px]'>Find Food</button>
                        </div>
                        <div className='flex items-center gap-2 text-[14px] absolute bottom-4 right-36  '>
                            <FaLocationCrosshairs />
                            <button className='text-[#ED6923]'> Locate me</button>
                        </div>
                    </div>

                </div>
                <div className='lg:relative'>
                    <div>
                        <img src={people} alt="" />
                    </div>
                    <div className='hidden lg:flex'>
                        <div className='bg-white p-4 rounded-2xl w-[200px] flex flex-col items-start lg:absolute top-5'>
                            <img src={avatar} alt="" />
                            <p className='font-semibold text-[16px]'>Satisfied Customer</p>
                            <div className='flex items-center gap-3 justify-center'>
                                <div className='text-[24px] text-[#F4C700]'>
                                    <TiStarFullOutline />
                                </div>
                                <p>5.0 (3K Reviews)</p>
                            </div>
                        </div>
                        <div className='absolute -bottom-16'>
                            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-24'>
                                <div className="w-[330px] flex items-center rounded-2xl p-4 shadow bg-gradient-to-r from-[#fff8f1] to-[#fde7d8] backdrop-blur-md">
                                    <div className="w-[100px] h-[100px] rounded-xl overflow-hidden mr-4 flex-shrink-0">
                                        <img src={restaurant} alt="Restaurant" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-gray-800">Flavor Fusion Bistro</h4>
                                        <p className="text-sm text-gray-500 mb-2">Kaliurang, Seleman</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-1 text-sm text-gray-700">
                                                <span>4.9</span>
                                                <TiStarFullOutline className="text-yellow-400 text-lg" />
                                            </div>
                                            <div className="h-7 w-7 text-gray-500 rounded-full border border-gray-300 flex justify-center items-center">
                                                <RiPokerHeartsLine className="text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className=' bg-white flex items-center gap-4 p-4 rounded-2xl w-[160px] shadow'>
                                    <img src={icon} alt="" />
                                    <div>
                                        <p className='text-[18px] font-semibold'>24/7</p>
                                        <p>Delivery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;