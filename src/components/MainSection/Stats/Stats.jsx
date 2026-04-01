import React from 'react';

const Stats = () => {
    return (
        <section 
        className='py-10 mt-10 mb-15 md:mb-20
         bg-linear-to-r from-indigo-600 to-purple-600
          grid grid-cols-1 md:grid-cols-3 text-center text-base-200 gap-10 md:gap-0'>

            <div className='border-r-2 space-y-2'>
                <h1 className='font-extrabold text-6xl'>50K+</h1>
                <p className='font-medium text-2xl'>Active Users</p>
            </div>

            <div className='border-r-2 space-y-2'>
                <h1 className='font-extrabold text-6xl'>200+</h1>
                <p className='font-medium text-2xl'>Premium Tools</p>
            </div>

            <div className='space-y-2'>
                <h1 className='font-extrabold text-6xl'>4.9</h1>
                <p className='font-medium text-2xl'>Rating</p>
            </div>
        </section>
    );
};

export default Stats;