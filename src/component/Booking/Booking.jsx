import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = ({ cart, removeBooking }) => {
    return (
        <div className='text-center'>
            <h3 className='text-3xl font-bold underline text-center mt-4 py-2'>Booking List: {cart.length}</h3>
            {
                cart.length <1 ? <span className='font-bold text-yellow-600'>Add your place</span>: <span className='font-bold text-black'>Thank you for booking</span>
            }
            {/* {
                cart.length === 3 && toast("you are a tour lover!")
            }
            {
                cart.length ===7 && toast("Mind blowing...we give you discount!")
            } */}
            {
                cart.map(place => <div
                    key={place.id}
                    className='flex text-lg font-semibold text-center gap-2 justify-center mt-2 py-4'>
                    <p>{place.placeName}</p>
                    <p>{place.price}</p>
                    <button onClick={() => removeBooking(place.id)} className='text-red-500'>X</button>
                </div>)
            }
        </div>
    );
};

export default Booking;