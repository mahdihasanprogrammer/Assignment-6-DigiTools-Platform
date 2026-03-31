import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const SingleCart = ({cart}) => {
    return (

        
        <div className='flex justify-between items-center p-5 rounded-lg bg-gray-100'>
           
           <div className='flex items-center gap-5'>
                 <img className='p-3 rounded-full shadow bg-white' src={cart.icon} alt="" />
                <div>
                    <h1 className='text-xl font-semibold'>{cart.name}</h1>
                    <p className='font-medium'>${cart.price}</p>
                </div>
           </div>

           <div className='text-red-500 bg-white rounded-full p-2 cursor-pointer shadow'>
                <RiDeleteBin6Line className='size-6' />
           </div>

        </div>
    );
};

export default SingleCart;