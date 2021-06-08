import React from 'react';

const SingleChooseUs = ({ chooseUs }) => {
    const { img, name, desc } = chooseUs;

    return (
        <>
            <div className="bg-gray-100 p-3 rounded-3xl">
                <img src={img} alt="" />
                <div className="p-3">
                    <h5 className='text-xl font-medium'>{name}</h5>
                    <ps className=''>{desc}</ps>
                </div>
            </div>
        </>
    );
};

export default SingleChooseUs;