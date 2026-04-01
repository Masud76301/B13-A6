import * as LucideIcons from "lucide-react";


    import React from 'react';

    const Card = ({product}) => {
        const Icon = LucideIcons[product.icon];

        return (
            <div >
                <div className="card bg-base-100 w-full  shadow-sm p-6 space-y-4 h-full">
                    <div className={`badge badge-soft ${product.tag=="popular"?"badge-primary":product.tag=="new"?"badge-success":"badge-warning"} border-none  absolute top-2 right-2`}>{product.tag}</div>
                    <br></br>
                    {Icon && <Icon size={32} className="text-[#4F39F6]" />}
                    <h1 className='text-2xl font-bold'>{product.name}</h1>
                    <p className='text-[16px] text-[#627382] flex-1'>{product.description}</p>
                    <h2 className='text-[16px] text-[#627382]'><span className='text-2xl font-bold text-[#101727]'>{product.price}</span>/{product.period}</h2>
                    {
                        product.features.map((point,index)=><li key={index} className="flex items-center gap-2 text-[16px] text-[#627382]"><LucideIcons.Check size={16} className="text-[#11e517]" />{point}</li> )
                    }

                    <button className="btn w-[90%] mt-2 mx-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-2">Buy Now</button>

                </div>
            </div>
        );
    };

    export default Card;