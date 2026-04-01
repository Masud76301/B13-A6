import React from 'react';

const Stats = () => {
    return (
        <div className="h-60 bg-linear-to-r from-[#4F39F6] to-[#9514FA] my-20 flex justify-evenly items-center">
            <div className='space-y-3'>
                <h1 className='text-6xl font-extrabold text-white'>50K+</h1>
                <p className='text-2xl font-medium text-white opacity-80'>Active Users</p>
            </div>
            <div className='h-28 w-px bg-white'></div>
            <div className='space-y-3'>
                <h1 className='text-6xl font-extrabold text-white'>200+</h1>
                <p className='text-2xl font-medium text-white opacity-80'>Premium Tools</p>
            </div>
            <div className='h-28 w-px bg-white'></div>
            <div className='space-y-3'>
                <h1 className='text-6xl font-extrabold text-white'>4.9</h1>
                <p className='text-2xl font-medium text-white opacity-80'>Rating</p>
            </div>

        </div>
    );
};

export default Stats;