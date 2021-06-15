import React from 'react';
import { useForm } from "react-hook-form";



const ShipmentDetails = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);


    return (
        <>
            <aside className="leading-loose">
                <form className=" mx-2 p-10 bg-white rounded shadow" onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-gray-800 font-medium">Customer information</p>
                    <div className="">
                        <input className="w-full px-5 py-3 text-gray-700 bg-gray-100 rounded outline-none" {...register("name")} type="text" required placeholder="Your Name"/>
                    </div>
                    <div className="mt-3">
                        <input className="w-full px-5 py-3 text-gray-700 bg-gray-100 rounded outline-none" {...register("email")} type="text" required placeholder="Your Email" />
                    </div>
                    <div className="mt-3">
                        <input className="w-full px-5 py-3 text-gray-700 bg-gray-100 rounded outline-none" {...register("phone")} type="number" required placeholder="Phone" />
                    </div>
                    <div className="mt-3">
                        <input className="w-full px-5 py-3 text-gray-700 bg-gray-100 rounded outline-none" {...register("country")} type="text" required placeholder="Country" />
                    </div>
                    <div className="mt-3">
                        <input className="w-full px-5 py-3 text-gray-700 bg-gray-100 rounded outline-none" {...register("full_address")} type="text" required placeholder="Full Address" />
                    </div>
                    <div className="mt-4 text-center">
                        <input className="px-5 py-1 text-white tracking-wider bg-red-600 hover:bg-red-800 rounded cursor-pointer" type="submit" value='Save & continue'/>
                    </div>
                </form>
            </aside>
        </>
    );
};

export default ShipmentDetails;