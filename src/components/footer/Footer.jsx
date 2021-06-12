import React from 'react';
import { footerDataColLeft, footerDataColRight, bottomData } from './footerData';
import logo from '../../images/logo.png';


const Footer = () => {

    return (
        <>
            <section className='bg-black pt-8 pb-8'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                        <div className="py-5 pl-8 xl:pl-0">
                            <img className='w-1/3' src={logo} alt="" />
                        </div>
                        <div className="grid grid-cols-2 text-gray-500 text-center md:text-left">
                            <div className="left">
                                {
                                    footerDataColLeft.map((link, index) =>
                                        <>
                                            <a href={link.link}>
                                                <li className='list-none py-1' key={index++}>{link.title}</li>
                                            </a>
                                        </>
                                    )
                                }
                            </div>
                            <div className="right">
                                {
                                    footerDataColRight.map((link, index) =>
                                        <>
                                            <a href={link.link}>
                                                <li className='list-none py-1' key={index++}>{link.title}</li>
                                            </a>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="pt-12">
                        <hr className='border-gray-800' />
                        <div className="grid grid-cols-2 pt-3">
                            <div className="text-gray-500">
                                <p>Copyright © {new Date().getFullYear()}</p>
                            </div>
                            <div className="flex justify-evenly text-gray-500">
                                {
                                    bottomData.map((link, index) =>
                                        <>
                                            <a href={link.link}>
                                                <li className='list-none' key={index++}>{link.title}</li>
                                            </a>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;