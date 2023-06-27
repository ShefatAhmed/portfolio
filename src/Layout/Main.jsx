import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/Navbar/Navbar';

const Main = () => {
    return (
        <div className='md:max-w-7xl md:mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;