import { CircleDot } from 'lucide-react';
import React from 'react';
import play from '../../assets/Play.png'
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div className="mt-20 container mx-auto">
                <div className=" flex justify-between items-center gap-10 flex-col lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="max-w-147.5 rounded-lg "
                    />
                    <div className='space-y-2'>

                        <div className="badge bg-[#E1E7FF] text-[#4F39F6] rounded-4xl font-semibold  p-4">
                            <CircleDot className='w-4'></CircleDot>
                            <p className='text-[16px]'>New: AI-Powered Tools Available</p>
                        </div>

                        <div>
                            <h1 className="text-7xl font-extrabold">Supercharge Your <br></br>Digital Workflow</h1>
                            <p className="py-6 text-[#627382]">
                                Access premium AI tools, design assets, templates, and productivity <br></br>
                                software—all in one place. Start creating faster today.<br></br>
                                Explore Products
                            </p>
                        </div>

                        <div className='flex gap-2'>
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Explore Products</button>
                            <button className="btn btn-outline text-[#4F39F6] hover:bg-[#E1E7FF] rounded-full">
                                <img src={play} alt="" />
                                Watch Demo</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;