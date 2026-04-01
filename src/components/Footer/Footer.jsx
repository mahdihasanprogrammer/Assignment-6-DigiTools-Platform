import React from 'react';
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
<footer className='px-8 md:px-12  bg-[#101727] text-white md:pt-20 pt-15'>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 mb-20 gap-8 text-gray-300">

    <aside className='sm:col-span-2 w-5/6 lg:w-full space-y-4 mb-5'>
     <h1 className='text-4xl font-bold text-gray-100'>DigiTools </h1>
      <p className=''>
          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
      </p>
    </aside>
    <nav className='flex flex-col gap-3'>
      <h6 className="footer-title">Product</h6>
      <a className="link link-hover">Features</a>
      <a className="link link-hover">Pricing</a>
      <a className="link link-hover">Templates</a>
      <a className="link link-hover">Integration</a>
    </nav>
    <nav className='flex flex-col gap-3'>
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About</a>
      <a className="link link-hover">Blog</a>
      <a className="link link-hover">Careers</a>
      <a className="link link-hover">Press</a>

    </nav>
    <nav className='flex flex-col gap-3'>
      <h6 className="footer-title">Resources</h6>
      <a className="link link-hover">Documentation</a>
      <a className="link link-hover">Help Center</a>
      <a className="link link-hover">Community</a>
      <a className="link link-hover">Contact</a>
    </nav>

    <nav className='space-y-6'>
        <h6 className="footer-title">Social Links</h6>
        <div className='flex items-center gap-5'>
           <a href="#"> <SiInstagram /></a>
           <a href="#"> <FaFacebook /></a>
            <a href="#"><FaXTwitter /></a>
        </div>
    </nav>
  </div>

  <div className='py-7 border-t border-t-gray-600 flex flex-col md:flex-row md:justify-between items-center gap-2 tracking-wider text-gray-400 text-sm sm:text-base'>
    <p>© MAHDI HASAN. All rights reserved. </p>
    <ul className='flex gap-3 justify-center flex-wrap'>
        <li>Privacy Policy</li>
        <li>Term of Service</li>
        <li>Cookies</li>
    </ul>
  </div>
</footer>
    );
};

export default Footer;