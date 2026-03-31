import React from 'react';
import SingleCart from './SingleCart';
import cartIcon from '../../../../assets/assets/products/shopping-cart.png'

const CartsData = ({selectedCarts}) => {
    return (
        <div className='shadow-lg rounded-2xl space-y-5 p-8 mt-10 border-2 border-gray-200'>

            <h1 className='text-xl font-semibold'>Your Cart</h1>
            { selectedCarts.length > 0?
                selectedCarts.map(cart =>
                    <SingleCart key={cart.id} cart={cart} />) 


                    : <div className='py-20 text-center flex flex-col justify-center items-center gap-2'> 
                        <img className='size-6' src={cartIcon} alt="" />
                        <h1 className='font-medium text-gray-500'>Your cart is empty</h1>
                    </div>
            }
        </div>
    );
};

export default CartsData;