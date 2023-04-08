import React from 'react';
import { NavLink } from 'react-router-dom';
import {GlobeAltIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='bg-indigo-600 h-16 md:flex justify-between items-center md:px-36'>
            <div className='flex'>
                <div>
                <GlobeAltIcon className="h-8 w-8 text-yellow-500 mr-2" />
                </div>
                <div>
                <h2 className='text-2xl font-bold text-red-50'>TourPlanBD</h2>
                </div>
            </div>
            <nav className='flex font-bold text-xl'>
                <li className='mr-12 list-none text-white'>
                <NavLink to='/' className={({isActive})=>(isActive? 'active': '')}>Home</NavLink>
                </li>
                <li className='mr-12 list-none text-white'>
                <NavLink to='/places' className={({isActive})=>(isActive? 'active': '')}>Places</NavLink>
                </li>
                <li className='mr-12 list-none text-white'>
                <NavLink to='/about' className={({isActive})=>(isActive? 'active': '')}>About</NavLink>
                </li>
                <li className='mr-12 list-none text-white'>
                <NavLink to='/contact' className={({isActive})=>(isActive? 'active': '')}>Contact</NavLink>
                </li>
            </nav>
        </div>
    );
};

export default Header;