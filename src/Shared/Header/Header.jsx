import React from 'react';
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

const Header = () => {
    return (
        <div>
            <div className='bg-[#ED6923] text-center py-3'>
                <h3 className='text-white'> Free Delivery on Your First Order – Order Now!</h3>
            </div>
            <div className='bg-white py-4 shadow'>
                <div className='flex justify-between max-w-[1200px] mx-auto px-4'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;