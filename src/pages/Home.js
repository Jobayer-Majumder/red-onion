import React from 'react';
import Banner from '../componets/banner/Banner';
import Footer from '../componets/footer/Footer';
import Navbar from '../componets/navbar/Navbar';
import WhyChooseUs from '../componets/whyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <WhyChooseUs />
            <Footer />
        </>
    );
};

export default Home;