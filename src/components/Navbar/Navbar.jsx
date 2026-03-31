import React, { use } from 'react';
const navPromise = fetch('NavData.json').then(res => res.json());
import { RiMenu2Line} from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";


const Navbar = ({selectedCarts}) => {

const navData = use(navPromise);
const links = navData.map(navItem => {
    return <li key={navItem.id} 
    className='hover:bg-linear-to-r from-[#4F39F6]  to-[#9514FA] hover:py-2 hover:px-3 hover:text-base-100 hover:rounded-md duration-500 transition-all'> 
    <a href={navItem.path}>{navItem.name}</a>
          
    </li>
})


return (
<nav className="p-4 md:px-12 navbar bg-base-100 shadow-sm">
            
  <div className="navbar-start">
    <div className="dropdown">

      <div tabIndex={0} role="button" className=" mr-3 lg:hidden cursor-pointer">
        <RiMenu2Line className='size-6' />
      </div>

      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 space-y-2 rounded-box z-1 mt-3 box-content text-base cursor-pointer p-5 shadow font-medium">
            {links}
      </ul>
    </div>

    <h1 className=' font-extrabold text-xl sm:text-3xl text-transparent bg-clip-text  bg-linear-to-r from-indigo-500 to-purple-500'>
      DigiTools</h1>

  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="flex items-center gap-5 font-medium text-[#101727]">
    {links}
    </ul>
  </div>


  <div className="navbar-end flex items-center gap-2 md:gap-4">


     <button className='flex justify-between'>
      <FiShoppingCart className='size-6 z-10' /> 

      {
        selectedCarts.length >0&&
         <div className='bg-red-500 size-5 rounded-full text-white flex items-center justify-center text-xs relative right-1 -top-2'>
            {selectedCarts.length}
        </div>
      }
      </button>


    <button className='font-semibold'>Login</button>
    <button
     className=' btn sm:font-semibold  sm:text-base
     bg-linear-to-r from-indigo-500 to-purple-500 text-base-100  rounded-full'>
        Get Started</button>

  </div>
  
</nav>
    );
};

export default Navbar;