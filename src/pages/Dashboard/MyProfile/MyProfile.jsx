import React from 'react';
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";



const MyProfile = () => {
    return (
        <div>
            <div className='bg-white px-6 py-12 rounded-xl'>
                <h4 className='text-[24px] font-medium '>Profile</h4>
                <div className='flex items-start gap-3 border border-[#A1A1A1] border-dashed rounded-2xl mt-4 p-5 '>
                    <div className='text-[#ED6923]'>
                        <FaUser />
                    </div>
                    <div>
                        <h3>Name : </h3>
                        <p>Mark Jecno</p>
                    </div>
                </div>
                <div className='flex items-start gap-3 border border-[#A1A1A1] border-dashed rounded-2xl mt-4 p-5 '>
                    <div className='text-[#ED6923]'>
                        <MdOutlineEmail />
                    </div>
                    <div>
                        <h3>Email : </h3>
                        <p>mark-jecno@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-start gap-3 border border-[#A1A1A1] border-dashed rounded-2xl mt-4 p-5 '>
                    <div className='text-[#ED6923]'>
                        <MdLock />
                    </div>
                    <div>
                        <h3>Address : </h3>
                        <p>M93, Songbird Cir, Blackville, South Carolina, USA-29817</p>
                    </div>
                </div>

            </div>
            <div className='text-end my-8'>
                <button className='border-2 border-[#ED6923] bg-[#ED6923] text-white duration-500 cursor-pointer rounded-md px-9 py-[6px]  font-medium '>Update</button>
            </div>
            <div className='bg-white px-6 py-12 rounded-xl'>
                <h4 className='text-[24px] font-medium '>Change Password</h4>
                <div className='flex items-start gap-3 border border-[#A1A1A1] border-dashed rounded-2xl mt-4 p-5 '>
                    <div className='text-[#ED6923]'>
                        <MdLock />
                    </div>
                    <div>
                        <h3>Current Password : </h3>
                        <p>************</p>
                    </div>
                </div>
                <div className='flex items-start gap-3 border border-[#A1A1A1] border-dashed rounded-2xl mt-4 p-5 '>
                    <div className='text-[#ED6923]'>
                        <MdLock />
                    </div>
                    <div>
                        <h3>New Password : </h3>
                        <p>************</p>
                    </div>
                </div>
                <div className='flex items-start gap-3 border border-[#A1A1A1] border-dashed rounded-2xl mt-4 p-5 '>
                    <div className='text-[#ED6923]'>
                        <MdLock />
                    </div>
                    <div>
                        <h3>Confirm Password : </h3>
                        <p>************</p>
                    </div>
                </div>

            </div>
            <div className='text-end my-8'>
                <button className='border-2 border-[#ED6923] bg-[#ED6923] text-white duration-500 cursor-pointer rounded-md px-9 py-[6px]  font-medium '>Save Changes</button>
            </div>
        </div>
    );
};

export default MyProfile;