import React from 'react';
import Lottie from "lottie-react";
import travel from '../../assets/57997-travelers-find-location.json';

const Home = () => {
    return (
        <div>
            <h1 className='md:text-7xl text-3xl font-bold text-indigo-500 md:pt-12 text-center'>Welcome To TourPlanBD</h1>
            <div className='md:grid md:grid-cols-2'>
                <div className='w-full'>
                    <p className='text-xl text-justify pl-24 md:pt-36 font-semibold text-indigo-500'>Welcome to our tour website! We are thrilled to offer you an unforgettable travel experience that will leave you with lasting memories. Our team of travel experts has carefully crafted a range of tour packages that cater to all kinds of interests and budgets. Whether you're seeking adventure, relaxation, or cultural immersion, we've got you covered. With our extensive network of partners and suppliers, we ensure that you get the best value for your money without compromising on quality. So, whether you're planning a solo trip, a romantic getaway, or a family vacation, browse through our website and find the perfect tour package for you. Let us take care of the details while you sit back, relax, and enjoy the journey of a lifetime.</p>
                </div>
                <div>
                    <Lottie className='md:h-[500px]' animationData={travel} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;