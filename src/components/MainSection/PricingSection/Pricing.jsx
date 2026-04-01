import React, { use } from 'react';
import { IoMdCheckmark } from "react-icons/io";

const pricingPromise = fetch('PricingData.json').then(res => res.json());



const Pricing = () => {

const pricingData = use(pricingPromise);
console.log(pricingData)



    return (
    <section className='px-4 md:px-12 my-15 md:my-20 '>

               {/* section heading */}
        <div className='mb-15 text-center space-y-4'>
            <h1 className='font-extrabold text-3xl sm:text-5xl'>
               Simple, Transparent Pricing
            </h1>
            <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>


        {/* cart container */}

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {
        pricingData.map(pricing => 

        <div key={pricing.id}
         className={`card bg-base-200 shadow-sm hover:-translate-y-2 transition-all duration-500
          ${pricing.id ===2 && 'bg-linear-to-r from-indigo-600 to-purple-600 text-base-100 md:order-3 lg:order-0 md:col-span-2 lg:col-span-1'}`}>
        
          <div className="card-body relative">


            {
                pricing.tagType==='popular' &&
                 <span 
                 className='badge badge-xl font-medium
                  text-[#BB4D00] bg-[#FEF3C6] rounded-full 
                 absolute -translate-[50%] left-[50%] top-0.5'>
                    {pricing.tagType}</span>
            }

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{pricing.name}</h2>
              <p className={`text-[#627382] ${pricing.id ===2 && 'text-base-100'}`}>
                {pricing.description}</p>
              <h3 className='flex items-center gap-1 font-medium text-base'>
                <span className='text-2xl font-bold'>${pricing.price}</span>/ {pricing.period}
              </h3>
        
            </div>
            {/* features data */}
            <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
                {
                    pricing.features.map((feature, index) =>
                         <li key={index}
                          className='flex items-center gap-2 text-sm'>
                            <span className={`text-green-600 ${pricing.id === 2 && 'text-white'}`}>
                                <IoMdCheckmark className='size-4' />
                            </span> {feature}
                        </li>)
                }
            </ul>
        
            {/* button */}
            <div className="mt-6 bg-white rounded-full ">
                <button 
                className={`btn bg-linear-to-r from-indigo-600 to-purple-600  w-full  text-base 
                 text-base-100 rounded-full
                 ${pricing.id === 2 && 'text-transparent bg-clip-text'}`}
                >
                {pricing.btnText}
            </button>
            </div>
          </div>
        
        </div>
    )
        }
    </div>
            
     
    </section>
);
};

export default Pricing;