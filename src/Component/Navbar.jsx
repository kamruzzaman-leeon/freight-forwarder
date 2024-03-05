import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../public/logo/Soul-Aviation-logo-transparent.png';

const Navbar = () => {
    const navitem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/services">Travel & Tourism</Link></li>
        <li>
            <span>About-Us</span>
            <ul className="p-2">
                <li><Link to="/about-us/our-story">Our Story</Link></li>
                <li><Link to="/about-us/our-people">Our People</Link></li>
                <li><Link to="/about-us/our-companies">Our Companies</Link></li>
                <li><Link to="/about-us/award-accreditation">Award & Accreditation</Link></li>
            </ul>
        </li>
    </>
    return (
        <div className="flex justify-between bg-base-200">


            <div className="lg:hidden dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {
                        navitem
                    }
                </ul>


            </div>
            <div><li className="btn btn-ghost text-xl"><img src={logo} alt="Soul Aviation Ltd." className='w-24' /></li></div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navitem
                    }
                </ul>
            </div>
            <div className="p-3">
                <Link className="btn btn-info text-white font-normal">Contact us</Link>
            </div>
        </div>
    );
};

export default Navbar;
