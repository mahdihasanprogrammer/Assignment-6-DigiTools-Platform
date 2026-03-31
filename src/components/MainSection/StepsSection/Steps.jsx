import React from 'react';
import userImg from '../../../assets/user.png';
import packageImg from '../../../assets/package.png';
import rocketImg from '../../../assets/rocket.png';

const Steps = () => {
    return (
      <section className=' px-4 md:px-12 my-15 md:my-20 py-20 bg-gray-100'>

        {/* section heading */}
        <div className='mb-10 text-center space-y-4'>
            <h1 className='font-extrabold text-3xl sm:text-5xl'>
                Get Started in 3 Steps
            </h1>
            <p>Start using premium digital tools in minutes, not hours.</p>
        </div>

        {/* steps card container */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            {/* card-1 */}
            <div className='text-center space-y-4 p-6  border-2 border-gray-200 bg-white rounded-xl min-h-96 flex flex-col justify-start'>
              
              
               
              <div className='flex justify-end mb-7'>
                   <h1 className='flex justify-center items-center text-base-100 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full size-8'>01</h1>
              </div>
               
                <img className='mx-auto p-4 bg-purple-200 rounded-full' src={userImg} alt="user png" />
              
                <h1 className='text-2xl font-bold'>Create Account</h1>
                <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>

            {/* card-2 */}
             <div className='text-center space-y-4 p-6  border-2 border-gray-200 bg-white rounded-xl min-h-96 flex flex-col justify-start'>
              
              <div className='flex justify-end mb-7'>
                   <h1 className='flex justify-center items-center text-base-100 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full size-8'>02</h1>
              </div>
               
                <img className='mx-auto p-4 bg-purple-200 rounded-full' src={packageImg} alt="user png" />
              
                <h1 className='text-2xl font-bold'>Choose Products</h1>
                <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
            </div>


              {/* card-3 */}
            <div className='md:col-span-2 lg:col-span-1 text-center space-y-4 p-6  border-2 border-gray-200 bg-white rounded-xl min-h-96 flex flex-col justify-start'>
              
              <div className='flex justify-end mb-7'>
                   <h1 className='flex justify-center items-center text-base-100 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full size-8'>03</h1>
              </div>
               
                <img className='mx-auto p-4 bg-purple-200 rounded-full' src={rocketImg} alt="user png" />
              
                <h1 className='text-2xl font-bold'>Start Creating</h1>
                <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
            </div>

            
        </div>
      </section>
    );
};

export default Steps;