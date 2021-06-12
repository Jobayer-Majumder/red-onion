import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoCartOutline } from 'react-icons/io5';
import logo from '../../images/logo2.png';


const Navbar = () => {
    const state = useSelector(state => state?.userData)
    // console.log(state)


    return (
        <>
            <div className="relative bg-white sticky">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-5 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <img className='w-1/3' src={logo} alt="" />
                                {/* <span className="font-medium text-gray-500 hover:text-gray-900 text-2xl">Red Onion</span> */}
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                            </button>
                        </div>

                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a href="/" className='whitespace-nowrap text-gray-500 hover:text-gray-900 text-2xl'><IoCartOutline /> </a>
                            {
                                state?.name ? <span className='text-red-400'>{state?.name}</span> :
                                    // <Link to="/login" className="ml-6 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                    //     Sign in
                                    // </Link>
                                <Link to="/login" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600">
                                    Sign up
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;