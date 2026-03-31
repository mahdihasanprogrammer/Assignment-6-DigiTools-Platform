import React from 'react';
import { FcCheckmark } from "react-icons/fc";



const ProductCard = ({product}) => {
console.log(product)

const {name,description,price,period,tagType,features,icon} = product;

return (

<div className="card bg-base-100 shadow-sm hover:-translate-y-2 transition-all duration-500">

  <div className="card-body">

    <h4 className='flex justify-end'>
        <span 
        className={`badge badge-md badge-soft font-medium rounded-full
         ${tagType==='popular' ? 'badge-primary': `${tagType === 'new' ? 'bg-[#DBFCE7] text-green-600' : 'bg-[#FEF3C6] text-[#BB4D00]'}` }`}>{tagType}</span>
    </h4>

    <div className="space-y-4">
    
    <img className='rounded-full p-2 shadow-sm ' src={icon} alt="icon of card" />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className='text-[#627382]'>{description}</p>
      <h3 className='flex items-center gap-1 font-medium text-base'>
        <span className='text-2xl font-bold'>${price}</span>/ {period}
      </h3>

    </div>

    <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
        {
            features.map(feature =>
                 <li className='flex items-center gap-2 text-sm'>
                    <span><FcCheckmark className='size-4' /></span> {feature}
                </li>)
        }
    </ul>

    <div className="mt-6">
      <button className="btn text-base-100 text-base 
      bg-linear-to-r from-indigo-500 to-purple-500  w-full rounded-full">Buy Now</button>
    </div>
  </div>

</div>

);
};

export default ProductCard;