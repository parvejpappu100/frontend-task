import React from 'react';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import PopularCategory from '../../components/PopularCategory/PopularCategory';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='bg-gradient-to-l from-[#FDEDE4] to-[#FEF9F6] shadow'>
                <PopularCategory></PopularCategory>
            </div>
        </div>
    );
};

export default Home;