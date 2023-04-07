import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <h1>T-SHIRT <span className='text'>STORE</span></h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>

    );
};

export default Header;