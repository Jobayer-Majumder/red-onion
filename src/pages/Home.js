import React from 'react';
import Banner from '../componets/banner/Banner';
import Footer from '../componets/footer/Footer';
import Menus from '../componets/menus/menus/Menus';
import Navbar from '../componets/navbar/Navbar';
import WhyChooseUs from '../componets/whyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Menus />
            <WhyChooseUs />
            <Footer />
        </>
    );
};

export default Home;