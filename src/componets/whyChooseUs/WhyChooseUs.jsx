import React from 'react';
import chooseUsData from './chooseUsData';
import SingleChooseUs from './SingleChooseUs';

const WhyChooseUs = () => {
    return (
        <>
            <section className=' pt-8 pb-16'>
                <div className="container mx-auto pt-5">
                    <div className="w-11/12 mx-auto px-5 py-5">
                        <h1 className='mb-3 text-2xl md:text-4xl font-medium text-gray-500'>Why You Choose Us</h1>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Vel quo sed aperiam necessitatibus <br /> itaque recusandae eius impedit incidunt, iure assumenda?</p>
                    </div>
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            chooseUsData.map((chooseUs, index) => <SingleChooseUs key={index++} chooseUs={chooseUs} />)
                        }
                    </div>
                </div>
            </section>

        </>
    );
};

export default WhyChooseUs;