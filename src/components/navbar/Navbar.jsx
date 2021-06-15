import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoCartOutline } from 'react-icons/io5';
import logo from '../../images/logo2.png';


const Navbar = () => {
    const userData = useSelector(state => state?.userReducer.userData)
    const cartData = useSelector(state => state?.menuReducer.cartData)

    return (
        <>
            <nav className="relative bg-white sticky">
                <div className="container mx-auto px-0.5 sm:px-6">
                    <div className="flex py-5">
                        <div className="flex justify-start items-center lg:w-0 lg:flex-1">
                            <Link to="/">
                                <img className='w-2/4 sm:w-1/3 md:w-1/4' src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="flex items-center justify-end md:flex-1">
                            <Link to="/checkout" className='whitespace-nowrap text-gray-500 hover:text-gray-900 text-2xl inline'><IoCartOutline className='inline' /> {cartData.length}</Link>
                            {
                                userData?.name ? <span className='text-red-400'>{userData?.name}</span> :
                                    <Link to="/login" className="ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600">
                                        Sign up
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;