import React, { use } from 'react';
const navPromise = fetch('NavData.json').then(res => res.json());
import { RiMenu2Line} from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {

const navData = use(navPromise);
const links = navData.map(navItem => {
    return <li key={navItem.id} 
    className='hover:bg-linear-to-r from-[#4F39F6]  to-[#9514FA] hover:py-2 hover:px-3 hover:text-base-100 hover:rounded-md duration-500 transition-all'> 
    <a href={navItem.path}>{navItem.name}</a>
          
    </li>
})


return (
<nav className="p-5 md:px-10 navbar bg-base-100 shadow-sm">
            
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

        <RiMenu2Line className='size-6' />

      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 space-y-2 rounded-box z-1 mt-3  p-5 shadow font-medium">
            {links}
      </ul>
    </div>
    <h1 className=' font-black text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6]  to-[#9514FA]'>DigiTools</h1>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="flex items-center gap-5 font-medium text-[#101727]">
    {links}
    </ul>
  </div>


  <div className="navbar-end flex items-center gap-4">

    <FiShoppingCart className='size-6' />

    <button className='font-semibold'>Login</button>
    <button
     className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-base-100 font-semibold text-base rounded-full'>
        Get Started</button>

  </div>
  
</nav>
    );
};

export default Navbar;