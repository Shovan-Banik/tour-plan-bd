import React from 'react';

const Place = ({place,handleBooking}) => {
    const{id,img,duration,placeName,price}=place;
    return (
        <div className='border-4 border-indigo-600 rounded-lg p-4 m-4 mx-auto text-center'>
            <img className='h-[450px] w-[450px] rounded-lg' src={img} alt="tourist place" />
            <h4 className='text-2xl font-bold my-2'>{placeName}</h4>
            <p className='text-xl'>Duration: {duration}</p>
            <p className='text-xl'>Price: {price}</p>
            <button onClick={()=>handleBooking(place)} className='my-2 bg-indigo-600 text-white p-3 rounded-lg w-24 hover:bg-indigo-900'>Booking</button>
        </div>
    );
};

export default Place;