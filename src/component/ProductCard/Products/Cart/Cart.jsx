
import React from 'react';
import CartItem from "./CartItem";
import { ShoppingCart } from 'lucide-react';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const handelPayment = () => {
        setCart([]);
        toast.success("Payment Successful!");
    }

    return (
        <div className='container mx-auto card bg-base-100 space-y-4 shadow-sm p-4' >
            {
                cart.length == 0 ? <div className='flex flex-col justify-center items-center p-20 opacity-50 bg-base-300 rounded-2xl gap-10'>
                    <p className='text-center text-3xl font-bold  '>Cart Is Empty</p>
                    <ShoppingCart size={96} ></ShoppingCart>
                    </div> : <div className='space-y-4'>
                    <h2 className='text-2xl font-bold'>Your Cart</h2>
                    {
                        cart.map((item, index) => <CartItem key={index} cart={cart} setCart={setCart} item={item}></CartItem>)
                    }
                    <div className='flex justify-between items-center mt-6'>
                        <p className='text-[#627382] text-[16px]'>Total:</p>
                        <h3 className='text-2xl font-bold'>${totalPrice}</h3>
                    </div>
                    <button onClick={handelPayment} className="btn bg-linear-to-r w-full  from-[#4F39F6] to-[#9514FA] text-white rounded-full mt-6">Proceed to Checkout</button>
                </div>
            }


        </div>

    );
};

export default Cart; <h1>Empty Carts</h1>