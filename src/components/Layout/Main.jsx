import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='outlet'>
                <Outlet></Outlet>
            </div>
            <Toaster />
        </div>
    );
};

export default Main;