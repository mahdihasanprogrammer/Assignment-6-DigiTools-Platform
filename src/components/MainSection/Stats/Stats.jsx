import React from 'react';

const Stats = () => {
    return (
    <section className='  bg-linear-to-r from-indigo-600 to-purple-600'>
        <div
        className='container mx-auto py-10 mt-10 mb-15 md:mb-20
       
          grid grid-cols-1 md:grid-cols-3 text-center text-base-200 gap-10 md:gap-0'>

            <div className='border-r-2 space-y-2'>
                <h1 className='font-extrabold text-4xl md:text-6xl'>50K+</h1>
                <p className='font-medium text-xl md:text-2xl'>Active Users</p>
            </div>

            <div className='border-r-2 space-y-2'>
                <h1 className='font-extrabold text-4xl md:text-6xl'>200+</h1>
                <p className='font-medium text-xl md:text-2xl'>Premium Tools</p>
            </div>

            <div className='space-y-2'>
                <h1 className='font-extrabold text-4xl md:text-6xl'>4.9</h1>
                <p className='font-medium text-xl md:text-2xl'>Rating</p>
            </div>
        </div>
    </section>
    );
};

export default Stats;