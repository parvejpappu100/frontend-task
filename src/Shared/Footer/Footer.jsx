import React from 'react';
import logo from "../../assets/logo.png";
import { LiaFacebookF } from "react-icons/lia";
import { IoLogoTwitter } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";



const Footer = () => {
    return (
        <div className='bg-[#000000] text-[#A5A5A5] '>
            <div>
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto px-4 py-16 ">
                    <aside>
                        <img src={logo} alt="" />
                        <p className='my-5'>
                            Your go-to choice for fast and fresh <br /> delivery, bringing the best to your <br /> door in no time
                        </p>
                        <div className='flex items-center gap-4 '>
                            <button className='h-10 w-10 flex items-center justify-center rounded-full bg-[#1C2125] hover:bg-[#ED6923] duration-300 cursor-pointer border-none text-white font-semibold'>
                                <LiaFacebookF />
                            </button>
                            <button className='h-10 w-10 flex items-center justify-center rounded-full bg-[#1C2125] hover:bg-[#ED6923] duration-300 cursor-pointer border-none text-white font-semibold'>
                                <IoLogoTwitter />
                            </button>
                            <button className='h-10 w-10 flex items-center justify-center rounded-full bg-[#1C2125] hover:bg-[#ED6923] duration-300 cursor-pointer border-none text-white font-semibold'>
                                <FaSquareInstagram />
                            </button>
                            <button className='h-10 w-10 flex items-center justify-center rounded-full bg-[#1C2125] hover:bg-[#ED6923] duration-300 cursor-pointer border-none text-white font-semibold'>
                                <MdOutlineWhatsapp />
                            </button>
                        </div>
                    </aside>
                    <nav className='flex flex-col'>
                        <h6 className="text-white font-semibold text-2xl mb-10">Quick Link</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">How we work</a>
                        <a className="link link-hover">Career</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="text-white font-semibold text-2xl mb-10">Quick Link</h6>
                        <a className="link link-hover">Privacy</a>
                        <a className="link link-hover">Terms & Conditions</a>
                        <a className="link link-hover">Faq</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="text-white font-semibold text-2xl mb-10">Newsletter</h6>
                        <a className="link link-hover">Subscribe Our newsletter to get our <br />
                            Latest Update & News</a>
                        <div className='flex items-center mt-4'>
                            <input className='bg-[#1C2125] px-3 py-2 text-xl rounded-tl-[6px] rounded-bl-[6px]' placeholder='Enter Email' id="" />
                            <button className='bg-[#ED6923] text-white px-4 py-3 text-xl rounded-tr-[6px] rounded-br-[6px] cursor-pointer'><FaTelegramPlane /></button>
                        </div>
                    </nav>
                </footer>
                <footer className="footer sm:footer-horizontal footer-center bg-[#000000] text-[#A5A5A5] border-t border-[#A5A5A5] py-6 px-4 shadow">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - Tweet. All Rights Reservede</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;