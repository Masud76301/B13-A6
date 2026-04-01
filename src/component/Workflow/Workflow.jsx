import React from 'react';

const Workflow = () => {
    return (
        <div className="h-120 bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-20  flex flex-col justify-center items-center text-white text-center">

            <h1 className='text-[40px] font-extrabold'>Ready to Transform Your Workflow?</h1>
            <p className='text-[16px] mt-4 opacity-80'>Join thousands of professionals who are already using Digitools to work smarter.<br></br>Start your free trial today.</p>

            <div className='flex gap-2 mt-10'>

                <button className="btn bg-base-100 text-[#4F39F6] rounded-full">Explore Products</button>
                <button className="btn btn-outline  hover:bg-[#E1E7FF] rounded-full">View Pricing</button>

            </div>

               <p className='text-[16px] mt-4 opacity-80'>14-day free trial • No credit card required • Cancel anytime</p>

        </div>
    );
};

export default Workflow;