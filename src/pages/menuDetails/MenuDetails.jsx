import React from 'react'
import { useParams } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import Footer from '../../components/footer/Footer';
import breakfastData from '../../components/menus/breakfast/breakfastData/BreakfastData';
import Navbar from '../../components/navbar/Navbar';



const MenuDetails = () => {
    const id = useParams()
    const parsed = parseInt(id.id)
    const breakfast = breakfastData.find(data => data.id === parsed);
    const { name, img, desc, price } = breakfast;

    return (
        <>
            <section>
                <Navbar />
                <div className="container mx-auto" style={{ minHeight: '100vh' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="detail">
                            <h1 className='text-4xl'>{name}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum nam dignissimos similique dolorem voluptate laboriosam mollitia, veniam nihil rem voluptatibus, obcaecati hic porro. Delectus amet ab eveniet minima beatae!</p>
                            <h2 className='font-bold'>${price}</h2>
                            <button className='px-4 py-3 rounded text-white bg-red-400'><IoCartOutline className='inline' /> Add</button>
                        </div>
                        <div className="img">
                            <img className='w-2/3' src={img} alt="" />
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default MenuDetails;