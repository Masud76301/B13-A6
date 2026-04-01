import React from 'react';


const StepCard = ({card}) => {
    return (
        <div>
           
            <div>
                <div className="card bg-base-100 w-full shadow-sm px-10 py-22 flex flex-col items-center justify-center gap-3 relative">
                    <div className='absolute h-5 w-5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[14px] p-4 flex items-center justify-center font-bold top-5 right-5'>{card.id}</div>
                    <img className='w-25 bg-[#E1E7FF] rounded-full p-2' src={card.icon}></img>
                    <h1 className='text-2xl font-bold'>{card.title}</h1>
                    <p className='text-[14px] text-center text-[#627382]'>{card.description}</p>
                </div>
            </div>
        </div>
    );
};

export default StepCard;