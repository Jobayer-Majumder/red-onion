import fastDeliveryImg from '../../images/adult-blur-blurred-background-687824.png';
import responderImg from '../../images/chef-cook-food-33614.png';
import homeDeliveryImg from '../../images/architecture-building-city-2047397.png';
import { FaBus, FaTruckPickup } from 'react-icons/fa';
import { AiOutlineBell } from 'react-icons/ai';



const chooseUsData = [
    {
        name: 'Fast Delivery',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptate fuga et hic expedita fugiat.',
        img: fastDeliveryImg,
        icon: <FaBus />
    },
    {
        name: 'A Good Responder',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptate fuga et hic expedita fugiat.',
        img: responderImg,
        icon: <AiOutlineBell />
    },
    {
        name: 'Home Delivery',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptate fuga et hic expedita fugiat.',
        img: homeDeliveryImg,
        icon: <FaTruckPickup />
    },
]

export default chooseUsData