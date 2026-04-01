import React from 'react';

const WorkFlow = () => {
    return (
        <section className='px-4 md:px-12 py-15 md:py-25 bg-linear-to-r from-indigo-600 to-purple-600 text-center text-gray-200'>

            <div className='mb-10 space-y-4'>
                <h1 className='text-3xl tracking-wide md:text-4xl font-bold text-gray-100'>
                    Ready to Transform Your Workflow?
                </h1>
                <p className='md:w-5/9 mx-auto'>
                    Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
                </p>
            </div>

            <div className='flex gap-3 justify-center items-center mb-4'>
                <div className='bg-gray-100 rounded-full'>
                    <button className='btn rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text'>
                    Explore Products
                </button>
                </div>
                <button className='btn rounded-full bg-transparent border-2 text-gray-100'>View Pricing</button>
            </div>

            <p>14-day free trial • No credit card required • Cancel anytime</p>

        </section>
    );
};

export default WorkFlow;