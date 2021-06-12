import React from 'react';

const SingleBreakfast = ({ breakfast }) => {
    const { name, desc, img, price } = breakfast;

    return (
        <>
            <div className='p-5'>
                <div className="group hover:shadow-lg py-8 rounded-lg flex flex-col justify-center items-center">
                        <img className='w-1/2' src={img} alt="" />
                    <div className='px-4 pt-5 text-center'>
                        <h4 className='font-medium'>{name}</h4>
                        <p className='text-gray-500'>{desc}</p>
                        <h3 className='font-medium'>${price}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBreakfast;