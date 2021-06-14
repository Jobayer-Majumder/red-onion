import React from 'react';
import fakeData from '../../../fakeData/FakeData';
import SingleBreakfast from './singleBreakfast/SingleBreakfast';

const breakfast = fakeData.filter(data => data.category === 'breakfast')

const BreakFast = () => {
    return (
        <>
            <section className=''>
                <div className="container mx-auto">
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-14">
                        {
                            breakfast.map(breakfast => 
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