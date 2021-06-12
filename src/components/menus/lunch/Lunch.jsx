import React from 'react';
import lunchData from './lunchData/LunchData';
import SingleLunch from './singleLunch/SingleLunch';

const Lunch = () => {
    return (
        <>
            <section className=''>
                <div className="container mx-auto">
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-14">
                        {
                            lunchData.map(lunch => 
                                <SingleLunch key={lunch.id} lunch={lunch} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Lunch;