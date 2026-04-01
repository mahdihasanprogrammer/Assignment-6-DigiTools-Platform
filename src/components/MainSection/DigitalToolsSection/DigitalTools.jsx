import React, { Suspense, use, useState } from 'react';
import ProductsData from './Products/ProductsData';
import CartsData from './Carts/CartsData';

const DigitalTools = ({digitalToolsPromise,
    selectedCarts,
     setSelectedCarts}) => {

const [selected , setSelected] = useState('product');

const digitalToolsData = use(digitalToolsPromise);


    return (
        <section className='container mx-auto px-4 md:px-12 md:mt-15 mb-15 md:mb-20'>

            <div className='text-center space-y-5 mb-6'>

                <h1 className=' text-3xl md:text-5xl font-extrabold'>
                    Premium Digital Tools
                </h1>

                <p className='md:w-3/5 mx-auto'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

            
            </div>

            <div className='shadow rounded-full w-fit mx-auto flex items-center gap-2 p-1'>
                    
                <button 
                    onClick={()=>{setSelected('product')}}
                    className={` ${selected === 'product' && 'btn bg-linear-to-r from-indigo-600 to-purple-600 text-base-100'} 

                    font-semibold rounded-full  border-2 px-6 border-none text-base`} >
                        Products
                 </button>
                
                <button
                 onClick={()=>{setSelected('cart')}}
                  className={` ${selected === 'cart' && 'btn bg-linear-to-r from-indigo-600 to-purple-600 text-base-100'} 

                    font-semibold rounded-full  border-2 px-6 border-none  text-base`}>
                    Cart ({selectedCarts.length})
                 </button>
            </div>

            
            {
                selected === 'product' ?
                <Suspense 
                fallback={<span className="loading loading-bars loading-xl
               flex py-10 items-center mx-auto ">
                </span>}>

                     <ProductsData
                     selectedCarts={selectedCarts}
                     setSelectedCarts={setSelectedCarts}
                    digitalToolsData={digitalToolsData} />

                </Suspense> :

                <Suspense  
                 fallback={<span className="loading loading-bars flex py-10 items-center mx-auto"></span>}>

                     <CartsData 
                      selectedCarts={selectedCarts}
                     setSelectedCarts={setSelectedCarts}
                     />
                </Suspense>
            }

        </section>
    );
};

export default DigitalTools;