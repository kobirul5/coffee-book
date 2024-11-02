import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='flex flex-col  justify-center items-center gap-3 my-10'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-thin'>{title}</h1>
            <p className='font-thin'>{subtitle}</p>
        </div>
    );
};

export default Heading;