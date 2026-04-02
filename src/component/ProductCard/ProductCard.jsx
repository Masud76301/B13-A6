import React, { useState } from 'react';
import Product from './Products/Product';
import Cart from './Products/Cart/Cart';

const ProductCard = ({productData,cart,setCart}) => {
    const [toggle,setToggle]=useState(true);
  
    return (
        <div className='container mx-auto mb-10'>

            <div className='text-center space-y-6'>
                <h1 className='text-5xl font-extrabold'>Premium Digital Tools</h1>
                <p className='text-[16px] text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>
            
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box bg-transparent flex justify-center mt-4">
               
                <input type="radio" onClick={()=>setToggle(true)} name="my_tabs_1" className="tab rounded-full w-25" aria-label="Product" defaultChecked />
                <input type="radio" onClick={()=>setToggle(false)} name="my_tabs_1" className="tab  w-25 rounded-full" aria-label={`Cart (${cart.length})`} />
            </div>

            <div className='my-10'>
                {toggle?<Product productData={productData} cart={cart} setCart={setCart}></Product>:<Cart cart={cart} setCart={setCart}></Cart>}
                
            </div>

        </div>
    );
};

export default ProductCard;