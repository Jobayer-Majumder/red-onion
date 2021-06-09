import React from 'react';
import breakfastData from './breakfastData/BreakfastData';
import SingleBreakfast from './SingleBreakfast';

const BreakFast = () => {
    return (
        <>
            <section className=''>
                <div className="container mx-auto">
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-14">
                        {
                            breakfastData.map(breakfast => 
                                <SingleBreakfast key={breakfast.id} breakfast={breakfast} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default BreakFast;