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
import Swal from 'sweetalert2';
import ActiveLink from '../components/ActiveLink/ActiveLink';


const Profile = () => {

    const handleLogOut = () => {
        Swal.fire({
            title: "Log out successfully !",
            icon: "success",
            draggable: true
        });
    }

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
                                <ActiveLink to={"/profile/myProfile"}><FaRegUserCircle /> My Profile</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to={"/profile/order"}><RiShoppingBag3Line /> Order</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to={"/profile/stampCard"}> <LiaStampSolid /> StampCard</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to={"/profile/help"}><IoIosHelpCircleOutline /> Help</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to={"/profile/setting"}><CiSettings /> Setting</ActiveLink>
                            </li>
                            <li>
                                <Link onClick={handleLogOut}><IoLogOutOutline /> Logout</Link>
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