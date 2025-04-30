import React from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom';
import profilePic from "../assets/p.png";
import Footer from '../Shared/Footer/Footer';
import { FaRegUserCircle } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { LiaStampSolid } from "react-icons/lia";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";


const Profile = () => {



    return (
        <div>
            <div className='p-12 bg-gradient-to-l from-[#FDEDE4] to-[#FEF9F6]'>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content relative lg:px-24 ">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className=" top-2 left-2 text-3xl fixed drawer-button lg:hidden"><FaBars></FaBars></label>

                    </div>
                    <div className="drawer-side bg-white">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <div className='relative hidden lg:block'>
                            <div className='h-[150px] w-[300px] bg-gradient-to-l from-[#FF8E31] to-[#FFB67B]'>

                            </div>
                            <div className='absolute right-26 top-24'>
                                <img src={profilePic} alt="" />
                            </div>
                        </div>
                        <div className='mt-12 lg:mt-20   mx-auto flex flex-col items-center justify-center'>
                            <h3>Mark Jecno</h3>
                            <p>info@gmail.com</p>
                        </div>
                        <ul className="menu p-4  mt-24  text-[#5C5C5C] ">
                            <li className=''>
                                <Link to={"/profile/myProfile"}><FaRegUserCircle/> My Profile</Link>
                            </li>
                            <li>
                                <Link ><RiShoppingBag3Line/> Order</Link>
                            </li>
                            <li>
                                <Link > <LiaStampSolid/> StampCard</Link>
                            </li>
                            <li>
                                <Link ><IoIosHelpCircleOutline/> Help</Link>
                            </li>
                            <li>
                                <Link ><CiSettings/> Setting</Link>
                            </li>
                            <li>
                                <Link ><IoLogOutOutline/> Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;