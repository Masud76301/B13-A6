import React from 'react';
import facebook from '../../assets/social icon/facebook.png';
import instagram from '../../assets/social icon/instagram.png';
import vector from '../../assets/social icon/Vector.png';


const Footer = () => {
    return (
        <div className='bg-black text-white h-full'>
            <div className='container mx-auto pt-30 '>

                <div className=' grid md:grid-cols-3 gap-14  mb-10'>
                    <div>
                        <h1 className='font-extrabold text-4xl'>DigiTools</h1>
                        <p className='text-[16px] opacity-80 mt-4'>Premium digital tools for creators, <br></br> professionals, and businesses. Work smarter <br></br>with our suite of powerful tools.</p>
                    </div>
                    <div className='flex gap-12'>
                        <ul className='space-y-4'>
                            <li className='text-[20px] font-medium'>Product</li>
                            <li className="opacity-80">Features</li>
                            <li className="opacity-80">Pricing</li>
                            <li className="opacity-80">Templates</li>
                            <li className="opacity-80">Integrations</li>
                        </ul>
                        <ul className='space-y-4'>
                            <li className='text-[20px] font-medium'>Company</li>
                            <li className="opacity-80">About</li>
                            <li className="opacity-80">Blog </li>
                            <li className="opacity-80">Careers</li>
                            <li className="opacity-80"></li>
                        </ul>
                        <ul className='space-y-4'>
                            <li className='text-[20px] font-medium'>Resources</li>
                            <li className="opacity-80">Documentation</li>
                            <li className="opacity-80">Help Center</li>
                            <li className="opacity-80">Community</li>
                            <li className="opacity-80">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p className='mb-4 text-[20xp] font-medium'>Social Links</p>
                        <div className='flex gap-2'>

                            <img className='bg-white h-10 rounded-full p-2 flex justify-center items-center' src={facebook}></img>
                            <img className='bg-white h-10 rounded-full p-2 flex justify-center items-center' src={instagram}></img>
                            <img className='bg-white h-10 rounded-full p-2 flex justify-center items-center' src={vector}></img>
                        </div>


                    </div>
                </div>
                
                <hr className='mb-7.5 h-px opacity-50' />
                <div className='text-[16px] opacity-50 flex justify-between'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='space-x-6'>
                        <a>Privacy Policy</a>
                        <a>Terms of Service </a>
                        <a>Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;