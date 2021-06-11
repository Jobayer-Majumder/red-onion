import React from 'react';
import BreakFast from '../breakfast/BreakFast';
import Dinner from '../dinner/Dinner';
import Lunch from '../lunch/Lunch';

const Menus = () => {
    const [dinner, setDinner] = React.useState(false)
    const [lunch, setLunch] = React.useState(false)
    const [breakfast, setBreakfast] = React.useState(true)


    const handleDinner = () => {
        setDinner(true)
        setLunch(false)
        setBreakfast(false)
    }

    const handleLunch = () => {
        setDinner(false)
        setLunch(true)
        setBreakfast(false)
    }

    const handleBreakfast = () => {
        setDinner(false)
        setLunch(false)
        setBreakfast(true)
    }

    return (
        <>
            <section className='pt-12'>
                <div className="container mx-auto">
                    <div className="text-center py-3">
                        <button 
                            className={`px-2 py-2 ${breakfast ? 'bg-red-500 text-white focus:outline-none rounded' : ''}`} 
                            onClick={handleBreakfast} 
                        >Breakfast</button>
                        <button 
                            className={`mx-5 px-2 py-2 ${lunch ? 'bg-red-500 text-white focus:outline-none rounded' : ''}`} 
                            onClick={handleLunch} 
                        >Lunch</button>
                        <button 
                            className={`px-2 py-2 ${dinner ? 'bg-red-500 text-white focus:outline-none rounded' : ''}`} 
                            onClick={handleDinner} 
                        >Dinner</button>
                    </div>
                    {
                        breakfast && <BreakFast />
                    }
                    {

                        lunch && <Lunch />
                    }
                    {
                        dinner && <Dinner />
                    }
                </div>
            </section>
        </>
    )
};

export default Menus;