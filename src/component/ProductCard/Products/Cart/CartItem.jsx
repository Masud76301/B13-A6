import * as LucideIcons from "lucide-react";
import React from 'react';
import { toast } from "react-toastify";

const CartItem = ({ item,cart,setCart }) => {
    const Icon = LucideIcons[item.icon];
    const handelDelete =(item) =>{
       const filteredArray = cart.filter(c=> c.id !==item.id);
       setCart(filteredArray);
       toast("Item Deleted Successfully!")
    }
    return (
        <div className='bg-base-200 p-5 rounded-2xl flex justify-between items-center'>
            <div className="flex gap-3 items-center">
                {Icon && <Icon size={32} className="text-[#4F39F6]" />}
                <div>

                    <p className="text-[20px] font-semibold">{item.name}</p>
                    <p className="text-[16px] text-[#627382]">${item.price}</p>
                </div>      
            </div>
            <a  onClick={()=>handelDelete(item)} className="text-red-600 cursor-pointer font-bold">Remove</a>

        </div>)

};

export default CartItem;