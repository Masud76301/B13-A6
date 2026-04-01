
import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <a className="text-[#4F39F6] font-extrabold text-4xl">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <ShoppingCart></ShoppingCart>
                    <a>Login</a>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;