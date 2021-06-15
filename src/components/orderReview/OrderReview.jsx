import React from 'react';
import { useSelector } from 'react-redux';

const OrderReview = () => {
    const cartItem = useSelector(state => state?.menuReducer.cartData)
    const total = cartItem.reduce((prev, item) => (item.price * item.quantity) + prev, 0)

    return (
        <>
            <aside className="container px-3 pt-5">
                {
                    cartItem.length <= 0 && <h3 className='text-center text-lg font-bold py-4 border'>You have no selected items</h3>
                }
                {
                    cartItem?.map(
                        item => <div className='grid grid-cols-3 p-4 mb-2 bg-gray-100 rounded-lg' key={item.id}>

                            <div className="flex items-center">
                                <img src={item.img} className='w-2/3' alt="" />
                            </div>
                            <div className="">
                                <h2>{item.name}</h2>
                                <h4 className='text-xl py-2 text-red-600 font-bold'>${item.price * item.quantity}</h4>
                                <h4>x{item.quantity}</h4>
                                <p className='text-gray-500'>Delivery Fee</p>
                            </div>
                            <div className="text-right">
                                <button className='bg-red-600 px-3 rounded text-white'>X</button>
                            </div>
                        </div>
                    )
                }
                <div className="grid grid-cols-2 py-4">
                    <div className="pl-5">
                        <h4>Subtotal . {cartItem.length} Items</h4>
                        <h4>Delivery Fee</h4>
                        <h4>Tax</h4>
                        <h2 className='font-bold text-lg'>Total</h2>
                    </div>
                    <div className="text-right">
                        <h4>${total}</h4>
                        <h4>${total ? 5 : 0}</h4>
                        <h4>${total ? 2 : 0}</h4>
                        <h2 className='font-bold text-lg'>${total && total + 7}</h2>
                    </div>
                </div>
                <div className="text-center">
                    <button className="px-3 py-2 bg-red-600 text-white w-2/4 rounded hover:bg-red-800 disabled:opacity-50" disabled>Place Order</button>
                </div>
            </aside>
        </>
    );
};

export default OrderReview;