import React, { Suspense, use, useState } from 'react';
import ProductsData from './Products/ProductsData';

const DigitalTools = ({digitalToolsPromise}) => {

const [selected , setSelected] = useState('product');

const digitalToolsData = use(digitalToolsPromise);


    return (
        <section className='px-4 md:px-12 md:mt-15 mb-15 md:mb-20'>

            <div className='text-center space-y-5 mb-6'>

                <h1 className='text-5xl font-extrabold'>
                    Premium Digital Tools
                </h1>

                <p className='md:w-3/5 mx-auto'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

            
            </div>

            <div className='shadow rounded-full w-fit mx-auto flex items-center gap-2 p-1'>
                    
                <button 
                    onClick={()=>{setSelected('product')}}
                    className={`btn ${selected === 'product' && 'bg-linear-to-r from-indigo-500 to-purple-500 text-base-100'} 

                    font-semibold rounded-full  border-2 px-6 py-4 text-base`} >
                        Products
                 </button>
                
                <button
                 onClick={()=>{setSelected('cart')}}
                  className={`btn ${selected === 'cart' && 'bg-linear-to-r from-indigo-500 to-purple-500 text-base-100'} 

                    font-semibold rounded-full  border-2 px-6 py-4 text-base`}>
                    Cart (0)
                 </button>
            </div>

            
             <ProductsData
             digitalToolsData={digitalToolsData} />
           

        </section>
    );
};

export default DigitalTools;