import React from 'react';
import BreakFast from '../breakfast/BreakFast';

const Menus = () => {

    return(
        <>
            <section className='pt-12'>
                <div className="container mx-auto">
                    <div className="text-center py-3">
                        <a className='' href="/">Breakfast</a>
                        <a className='mx-5' href="/">Lunch</a>
                        <a className='' href="/">Dinner</a>
                    </div>
                    <BreakFast />
                </div>
            </section>
        </>
    )
};

export default Menus;