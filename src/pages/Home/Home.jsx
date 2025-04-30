import React from 'react';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import PopularCategory from '../../components/PopularCategory/PopularCategory';
import PopularFood from '../../components/PopularFood/PopularFood';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='bg-gradient-to-l from-[#FDEDE4] to-[#FEF9F6] shadow'>
                <PopularCategory></PopularCategory>
                <PopularFood></PopularFood>
            </div>
        </div>
    );
};

export default Home;