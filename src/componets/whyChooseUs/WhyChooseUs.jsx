import React from 'react';
import chooseUsData from './chooseUsData';
import SingleChooseUs from './SingleChooseUs';

const WhyChooseUs = () => {
    return (
        <>
            <section>
                <div className="container mx-auto">
                    <div className="w-11/12 mx-auto px-5 py-4">
                        <h4 className='text-xl font-medium'>Why You Choose Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, facilis.</p>
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