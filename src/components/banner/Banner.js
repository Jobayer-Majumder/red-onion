import React from 'react';
import banner from '../../images/bannerbackground.png';

const bannerStyle = {
    height: 'auto',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left'
}



const Banner = () => {
    return (
        <section style={bannerStyle}>
            <div className="container mx-auto flex flex-col items-center justify-center" style={{ height: '550px' }}>
                <h4 className='text-xl md:text-4xl lg:text-5xl text-gray-700 pb-6 font-medium'>Best Food Waiting For Your Belly</h4>
                <input className='outline-none w-2/4 px-5 py-2 rounded-full focus:ring-2 focus:ring-red-500 ' type="search" placeholder='Search items' />
            </div>
        </section>
    );
};

export default Banner;