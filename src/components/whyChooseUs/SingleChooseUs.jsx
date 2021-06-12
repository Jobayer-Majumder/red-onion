import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';


const SingleChooseUs = ({ chooseUs }) => {
    const { img, name, desc, icon } = chooseUs;

    return (
        <>
            <div className="bg-gray-100 p-3 rounded-3xl">
                <img src={img} alt="" />
                <div className="p-3 flex">
                    <div className='px-2'>
                        <h5 className='text-2xl bg-red-500 text-white p-2 rounded-full'>{icon}</h5>
                    </div>
                    <div>
                        <h5 className='text-xl font-medium'>{name}</h5>
                        <ps className='text-gray-500'>{desc}</ps>
                        <a href="/" className='text-blue-500'>
                            <p className='mt-2'>
                                See More <BsArrowRightShort className='text-white inline bg-green-500 rounded-full'/>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleChooseUs;