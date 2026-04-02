
import * as LucideIcons from "lucide-react";
import React from 'react';

const PricingCard = ({ pricingCard }) => {
    return (
        <div>
            <div className={`h-full w-96 ${pricingCard.tag=="Most Popular"?"bg-linear-to-b from-[#4F39F6] to-[#9514FA]":"bg-base-200 "} shadow-sm rounded-2xl relative`}>
                <div className=" h-full  flex flex-col p-4 text-left">
                    <span className={`bg-amber-200 p-1 ${pricingCard.tag=="Most Popular"?"absolute":"hidden"} text-amber-600 rounded-full w-30  text-center text-[12px]  -top-4 left-35  `}>{pricingCard.tag}</span>
                    <div >
                        <h2 className={`text-2xl ${pricingCard.tag=="Most Popular"?"text-white":"text-[#627382]"} font-bold`}>{pricingCard.name}</h2>
                        <p className={`text-[16px] ${pricingCard.tag=="Most Popular"?"text-white":"text-[#627382]"}  text-left`}>{pricingCard.info}</p>
                    </div>
                    <h1 className={`text-[40px] ${pricingCard.tag=="Most Popular"?"text-white":"text-[#627382]"} font-bold my-6`}>${pricingCard.price}/<span className={`text-[16px] ${pricingCard.tag=="Most Popular"?"text-white":"text-[#627382]"} `}>{pricingCard.period}</span></h1>

                    <div className="flex-1">
                        {
                            pricingCard.features.map((point, index) => <li key={index} className={`flex items-center gap-2 text-[16px] ${pricingCard.tag=="Most Popular"?"text-white":"text-[#627382]"}`}><LucideIcons.Check size={16} className="text-[#11e517]" />{point}</li>)
                        }
                    </div>

                    <div className="mt-6">
                        <button className={`btn bg-linear-to-r ${pricingCard.tag!=="Most Popular"?"bg-linear-to-b from-[#4F39F6] to-[#9514FA]  text-white":"bg-base-200 text-black"} w-full rounded-full`}>Subscribe</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;