import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Place from '../Place/Place';
import Booking from '../Booking/Booking';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Places = () => {
    const navigation=useNavigation();
    if(navigation.state==='loading'){
        return <LoadingSpinner></LoadingSpinner>
    }
    const [cart, setCart] = useState([]);
    const places = useLoaderData();
    const handleBooking = (place) => {
        const exists = cart.find(pl => pl.id === place.id);
        if (exists) {
            toast("you already added this place!");
        }
        else {
            const newCart = [...cart, place];
            setCart(newCart);
        }
    }
    const removeBooking = (id) => {
        const remaining = cart.filter(place => place.id !== id);
        setCart(remaining);
    }
    return (
        <div className='mt-12 md:grid md:grid-cols-4 md:px-24 px-4'>
            <div className='col-span-3'>
                <div className='md:grid grid-cols-2'>
                    {
                        places.map(place => <Place
                            key={place.id}
                            place={place}
                            handleBooking={handleBooking}
                        ></Place>)
                    }
                </div>
            </div>
            <div className='col-span-1'>
                <div className='bg-indigo-600 text-white md:fixed top-32 p-8'>
                    <Booking
                        cart={cart}
                        removeBooking={removeBooking}
                    ></Booking>
                </div>
            </div>
        </div>
    );
};

export default Places;