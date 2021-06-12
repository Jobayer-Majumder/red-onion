import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner'
import Menus from '../../components/menus/menus/Menus';
import WhyChooseUs from '../../components/whyChooseUs/WhyChooseUs';
import Footer from '../../components/footer/Footer.jsx';



const Home = () => {
    return (
        <>
            <Navbar/>
            <Banner />
            <Menus />
            <WhyChooseUs />
            <Footer />
        </>
    );
};

export default Home;