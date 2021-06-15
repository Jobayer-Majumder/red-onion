import React from 'react';
import OrderReview from '../../components/orderReview/OrderReview';
import ShipmentDetails from '../../components/shipmentDetails/ShipmentDetails';
import Navbar from '../../components/navbar/Navbar.jsx'


const CheckOut = () => {
    return (
        <>
            <section>
                <Navbar />
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <ShipmentDetails />
                        <OrderReview />
                    </div>
                </div>
            </section>
        </>
    );
};

export default CheckOut;