
import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({cart}) => {
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
                    <div className='relative'>
                    <div className='h-5 w-5 absolute -top-2 left-4  text-[10px] font-bold flex items-center justify-center bg-red-600 text-white rounded-full'>{cart.length}</div>
                    <ShoppingCart></ShoppingCart>

                    </div>
                    <a>Login</a>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;