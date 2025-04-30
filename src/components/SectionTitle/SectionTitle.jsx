import React from 'react';

const SectionTitle = ({title, titleBlack, titleOrange}) => {
    return (
        <div className='max-w-[1200px] mx-auto px-4'>
            <h5 className='lobster-font  text-[20px] mb-3'>{title}</h5>
            <h3 className='text-2xl lg:text-4xl font-semibold '>{titleBlack} <span className='text-[#ED6923]'>{titleOrange}</span></h3>
        </div>
    );
};

export default SectionTitle;