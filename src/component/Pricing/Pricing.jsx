import React from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1,
            name: "Starter",
            price: 0,
            tag: "Normal",
            period: "monthly",
            info: "Best for beginners who need essential tools and you cen choose it.",
            features: [
                "Access to basic tools",
                "Email support",
                "1 project limit",
                "Team collaboration"
            ]
        },

        {
            id: 2,
            name: "Pro",
            price: 14.99,
            tag: "Most Popular",
            period: "monthly",
            info: "Perfect for professionals who want more flexibility.",
            features: [
                "Unlimited projects",
                "Priority support",
                "Advanced analytics",
                "Team collaboration"
            ]
        },

        {
            id: 3,
            name: "Enterprise",
            price: 29.99,
            tag: "Popular",
            period: "monthly",
            info: "For businesses needing full power and customization.",
            features: [
                "All Pro features",
                "Custom branding",
                "24/7 dedicated support",
                "Automation tools",
                "API access"
            ]
        }
    ];

    return (
        <div className='my-30 container mx-auto'>
            <div className='text-center space-y-4'>
                <h1 className='text-5xl font-extrabold'>Simple, Transparent Pricing</h1>
                <p className='text-[16px] text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                <div className='grid md:grid-cols-3 gap-6 justify-items-center mx-auto mt-10 '>
                    {
                        pricingOptions.map((pricingCard, index) => <PricingCard key={index} pricingCard={pricingCard}></PricingCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Pricing;