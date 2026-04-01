import React from 'react';
import bannerImg from '../../assets/banner.png';
import { IoPlayOutline } from "react-icons/io5";
import badgeImg from '../../assets/assets/products/Group 5.png'

const Hero = () => {
    return (

<div className=" px-4 py-10 md:px-12 md:py-15 flex justify-between items-center flex-col lg:flex-row-reverse gap-15">

    <img className='shadow-lg'  src={bannerImg} alt="banner image" />

    <div>

      <div class="badge badge-soft badge-primary badge-lg rounded-full font-medium mb-4">
        <img src={badgeImg} alt="" />
        New: AI-Powered Tools Available
      </div>

      <h1 className=" text-4xl leading-12 md:leading-20 md:text-6xl font-bold">
      Supercharge Your Digital Workflow
     </h1>
      <p className="py-6 lg:w-3/4">
       Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
      </p>
      
        <div className='flex items-center flex-wrap gap-3'>
            <button
                 className='btn text-base box-content text-base-100
                  bg-linear-to-r from-indigo-600 to-purple-600
                   font-semibold rounded-full transition-all duration-1000
                   hover:text-transparent hover:bg-clip-text border-2 hover:border-[#9514FA] '>
                 Explore Products
            </button>

            <button className="btn text-base box-content font-semibold rounded-full bg-transparent  text-[#9514FA] 
            hover:bg-linear-to-r from-indigo-600 to-purple-600
             border-2  border-[#9514FA] transition-all duration-1000
            hover:text-base-100
            ">
               <IoPlayOutline className='text-xl' /> Watch Demo
            </button>
            
        </div>
    </div>
  </div>

);
};

export default Hero;