import React from 'react';
import bannerImg from '../../assets/banner.png';
import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
    return (

<div className=" px-4 py-10 md:px-10 md:py-15 flex justify-between items-center flex-col lg:flex-row-reverse gap-15">
    <img  src={bannerImg} alt="banner image" />
    <div>
      <h1 className=" text-3xl md:text-6xl font-bold">
      Supercharge Your Digital Workflow
    </h1>
      <p className="py-6 lg:w-3/4">
       Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
      </p>
        <div className='flex items-center flex-wrap gap-3'>
            <button
                 className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-base-100 font-semibold rounded-full hover:text-transparent hover:bg-clip-text border-2 hover:border-[#9514FA] transition-all duration-1000'>
                 Explore Products
            </button>
            <button className="btn font-semibold rounded-full bg-transparent  text-[#9514FA] hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-2  border-[#9514FA] transition-all duration-1000
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