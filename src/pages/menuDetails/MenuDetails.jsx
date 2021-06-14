// external imports

import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { BiMinus, BiPlus } from 'react-icons/bi';

// internal imports
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { addToCart } from '../../store/actions/actions';
import fakeData from '../../fakeData/FakeData';



const MenuDetails = () => {
    let [quantity, setQuantity] = React.useState(1)
    const dispatch = useDispatch()
    const id = useParams()
    const parsed = parseInt(id.id)
    const menuItem = fakeData.find(data => data.id === parsed);
    const { name, img, price } = menuItem;
    menuItem.quantity = quantity;

    const handleAddToCart = () => {
        dispatch({ type: addToCart, cartData: menuItem })
    }

    const handlePlusCount = () => {
        setQuantity(() => quantity + 1)
    }
    const handleMinusCount = () => {
        if(quantity > 0){
            setQuantity(() => quantity - 1)
        }
    }

    return (
        <>
            <section>
                <Navbar />
                <div className="container mx-auto" style={{ minHeight: '100vh' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <h1 className='text-4xl mb-8'>{name}</h1>
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum nam dignissimos similique dolorem voluptate laboriosam mollitia, veniam nihil rem voluptatibus, obcaecati hic porro. Delectus amet ab eveniet minima beatae!</p>
                            <h2 className="font-bold text-xl pt-4">${price}</h2>
                            <div className="p-4">
                                <BiPlus onClick={handlePlusCount} className='inline m-2 text-2xl'/>
                                <h2 className='font-bold mb-3 inline'>{quantity}</h2>
                                <BiMinus onClick={handleMinusCount} className='inline m-2 text-2xl' />
                                <button onClick={handleAddToCart} className='mt-3 px-4 py-2 rounded-full text-white bg-red-400 block'><IoCartOutline className='inline' /> Add</button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <img className='w-2/3' src={img} alt="" />
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default MenuDetails;