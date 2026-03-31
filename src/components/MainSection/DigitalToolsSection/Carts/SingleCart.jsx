import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from 'react-toastify';

const SingleCart = ({cart,selectedCarts, setSelectedCarts, setTotalPrice}) => {


// click the delete button, and delete cart form cart tab;
const handleDeleteCartFromCartTab =(cart)=>{
    const filteredCart = selectedCarts.filter(filterCart => filterCart.id !== cart.id);
    toast.warning('deleted product from cart ')
   setSelectedCarts(filteredCart)
}

// set total price of tab carts
const totalCartPrice =  selectedCarts.reduce((sum, selectedItem)=> sum + selectedItem.price,0);

// updated totalPrice state;
setTotalPrice(totalCartPrice);

    return (
        <div className='p-4 rounded-lg bg-gray-100 flex justify-between items-center'>
           
           {/* left content */}
           <div className='flex items-center gap-3 md:gap-5'>
                 <img className='size-6 p-2 md:size-auto box-content md:box-border md:p-3 rounded-full shadow bg-white' src={cart.icon} alt="" />
                <div>
                    <h1 className='md:text-xl font-semibold'>{cart.name}</h1>
                    <p className='font-medium'>${cart.price}</p>
                </div>
           </div>

            {/* right content */}
           <button onClick={() => {handleDeleteCartFromCartTab(cart)}}
            className='text-red-500 bg-white rounded-full p-2 cursor-pointer shadow'>
                <RiDeleteBin6Line className='size-4 md:size-6' />
           </button>
        </div>
    );
};

export default SingleCart;