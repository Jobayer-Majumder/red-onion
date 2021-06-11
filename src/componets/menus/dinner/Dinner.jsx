import React from 'react';
import DinnerData from './dinnerData/DinnerData';
import SingleDinner from './singleDinner/SingleDinner';

const Dinner = () => {
    return (
        <>
            <section className=''>
                <div className="container mx-auto">
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-14">
                        {
                            DinnerData.map(dinner => 
                                <SingleDinner key={dinner.id} dinner={dinner} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dinner;