import React from 'react';
import BreakFast from '../breakfast/BreakFast';
import Dinner from '../dinner/Dinner';
import Lunch from '../lunch/Lunch';

const Menus = () => {
    let [menu, setMenu] = React.useState('breakfast')
    
    const handleMenuChange = e => {
        setMenu(e.target.value)
    }
    

    return (
        <>
            <section className='pt-12'>
                <div className="container mx-auto">
                    <div className="text-center py-3">
                        <button 
                            className={`px-2 py-2 ${menu === 'breakfast' ? 'bg-red-500 text-white rounded focus:outline-none': ''}`} 
                            onClick={(e) => handleMenuChange(e) }
                            value='breakfast' 
                        >Breakfast</button>
                        <button 
                            className={`mx-5 px-2 py-2 ${menu === 'lunch' ? 'bg-red-500 text-white rounded focus:outline-none': ''}`} 
                            onClick={(e) => handleMenuChange(e)} 
                            value='lunch'
                        >Lunch</button>
                        <button 
                            className={`px-2 py-2 ${menu === 'dinner' ? 'bg-red-500 text-white rounded focus:outline-none': ''}`} 
                            onClick={(e) => handleMenuChange(e)}
                            value='dinner' 
                        >Dinner</button>
                    </div>
                    {
                        menu === 'breakfast' && <BreakFast />
                    }
                    {

                        menu === 'lunch' && <Lunch />
                    }
                    {
                        menu === 'dinner' && <Dinner />
                    }
                </div>
            </section>
        </>
    )
};

export default Menus;