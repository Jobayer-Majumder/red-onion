import React from 'react';
import { IoCartOutline } from 'react-icons/io5';


const Navbar = () => {
    return (
        <>
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-5 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <span className="font-medium text-gray-500 hover:text-gray-900 text-2xl">Red Onion</span>
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                            </button>
                        </div>
                        {/* <nav className="hidden md:flex space-x-10">
                            <a href="/" className='text-base font-medium text-gray-500 hover:text-gray-900'>Menus</a>

                            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Pricing
                            </a>
                            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Docs
                            </a>
                            <a href="/" className='text-base font-medium text-gray-500 hover:text-gray-900'>More</a>
                        </nav> */}
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a href="/" className='whitespace-nowrap text-gray-500 hover:text-gray-900 text-2xl'><IoCartOutline /> </a>
                            <a href="/" className="ml-6 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                Sign in
                            </a>
                            <a href="/" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;