import React from 'react';
import fakeData from '../../../fakeData/FakeData';
import SingleDinner from './singleDinner/SingleDinner';

const dinner = fakeData.filter(data => data.category === 'dinner')

const Dinner = () => {
    return (
        <>
            <section className=''>
                <div className="container mx-auto">
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-14">
                        {
                            dinner.map(dinner => 
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