import React from 'react';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import PopularCategory from '../../components/PopularCategory/PopularCategory';
import PopularFood from '../../components/PopularFood/PopularFood';
import PopularRestaurant from '../../components/PopularRestaurant/PopularRestaurant';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='bg-gradient-to-l from-[#FDEDE4] to-[#FEF9F6] shadow'>
                <PopularCategory></PopularCategory>
                <PopularFood></PopularFood>
                <PopularRestaurant></PopularRestaurant>
            </div>
        </div>
    );
};

export default Home;