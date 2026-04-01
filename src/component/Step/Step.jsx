import React from 'react';
import StepCard from './StepCard';
import user from '../../assets/user.png'
import packages from '../../assets/package.png'
import rocket from '../../assets/rocket.png'


const Step = () => {
    const stepData = [
        {
            id: "1",
            icon: user,
            title: "Create Account",
            description: "Sign up for free in seconds. No credit card required to get started."
        },

        {
            id: "2",
            icon:packages,
            title: "Choose Products",
            description: "Browse our catalog and select the tools that fit your needs."
        },

        {
            id: "3",
            icon: rocket,
            title: "Start Creating",
            description: "Download and start using your premium tools immediately."
        },





    ]
    return (


        <div className='py-30 mb-10 bg-[#F9FAFC]'>
            <h1 className='text-5xl font-extrabold text-center'>Get Started in 3 Steps</h1>
            <p className='text-[#627382] text-center mt-2'>Start using premium digital tools in minutes, not hours.</p>

            <div className='grid md:grid-cols-3 gap-6 container mx-auto mt-10 '>

                {
                    stepData.map(card => <StepCard card={card}></StepCard>)
                }
            </div>

        </div>
    );
};

export default Step;