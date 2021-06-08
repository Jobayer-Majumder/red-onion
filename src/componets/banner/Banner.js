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
            <div className="container mx-auto flex items-center justify-center" style={{ height: '500px' }}>
                {/* <h4>this is header container</h4> */}
                <input className='outline-none w-2/3 px-5 py-2 rounded-full focus:ring-2 focus:ring-purple-500 ' type="search" placeholder='Search items' />
            </div>
        </section>
    );
};

export default Banner;