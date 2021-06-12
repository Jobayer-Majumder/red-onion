// external exports

import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";


// internal export
import banner from '../../images/bannerbackground.png';
import logo from '../../images/logo2.png';
import { userSignUp } from '../../store/actions/actions';
import firebaseConfig from '../../firebase/Firebase.config';
import { Link } from 'react-router-dom';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [isPassMatched, setIsPassMatched] = React.useState()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()


    const onSubmit = data => {
        if (data.password !== data.confirmPass) {
            setIsPassMatched('notMatched')
        } else {
            setIsPassMatched('matched')
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch({type: userSignUp, data: data})
                    console.log(user)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage)
                });
        }

    };


    const loginParentStyle = {
        height: '100vh',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left'
    }

    return (
        <>
            <section style={loginParentStyle}>
                <div className="container mx-auto pt-8">
                    <div className="grid grid-cols-1">
                        <div className='flex justify-center pt-8 pb-8'>
                            <img className='w-2/4 md:w-1/4 lg:w-1/5' src={logo} alt="" />
                        </div>
                        <div className='flex justify-center' >
                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center w-3/4 md:w-2/4 lg:w-1/4'>
                                {
                                    errors.name && <span className='text-red-400'>This field is required</span>
                                }
                                <input className='block px-5 py-3 mb-2 rounded bg-gray-100 outline-none focus:ring-1 focus:ring-red-500'  {...register("name", { required: true })} placeholder='Your Name' />

                                {
                                    errors.email && <span className='text-red-400'>This field is required</span>
                                }
                                <input className='block px-5 py-3 mb-2 rounded bg-gray-100  outline-none focus:ring-1 focus:ring-red-500' {...register("email", { required: true })} placeholder='Your Email' />

                                {
                                    errors.password && <span className='text-red-400'>This field is required</span>
                                }
                                <input className='block px-5 py-3 mb-2 rounded bg-gray-100 outline-none focus:ring-1 focus:ring-red-500' {...register("password", { required: true })} placeholder='Password' />

                                {
                                    errors.confirmPass && <span className='text-red-400'>This field is required</span>
                                }
                                {
                                    isPassMatched === 'notMatched' && <span className='text-red-500'>You entered Wrong Password</span>
                                }
                                <input className='block px-5 py-3 mb-3 rounded bg-gray-100 outline-none focus:ring-1 focus:ring-red-500' {...register("confirmPass", { required: true })} placeholder='Confirm Password' />

                                <input className='px-5 py-3 rounded bg-red-500 cursor-pointer text-white' type="submit" value='Sign in' />
                                <p className='text-center text-gray-500'>Already have an account ? <Link to='login' className='text-blue-600'>Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;