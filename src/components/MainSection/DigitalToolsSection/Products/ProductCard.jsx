
import { FcCheckmark } from "react-icons/fc";
import { IoCheckmarkSharp } from "react-icons/io5";
import { toast } from "react-toastify";



const ProductCard = ({product,selectedCarts, setSelectedCarts}) => {

const {name,description,price,period,tagType,features,icon} = product;

const click = selectedCarts.some(s => s.id === product.id);

 // set total price of tab carts


 const handleSelected = ()=>{

    if(click){
     toast.error(`${product.name} card already added in cart`)
      return;
    }
    else{
       toast.success('Added to cart successfully');
       // updated totalPrice state;
      
    }

    // updated selectedCarts array value , and set cart section;
   const updatedSelectedCarts = [...selectedCarts, product];
   setSelectedCarts(updatedSelectedCarts);
  
 }
 


return (

<div className={`card bg-base-100 shadow-md
   hover:-translate-y-2 transition-all duration-500
   ${product.id===9 && 'md:col-span-2 lg:col-span-1'}`}>

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
            features.map((feature, index) =>
                 <li key={index}
                  className='flex items-center gap-2 text-sm'>
                    <span><FcCheckmark className='size-4' /></span> {feature}
                </li>)
        }
    </ul>

    <div className="mt-6">
      <button
      onClick={handleSelected}
       className={`btn text-base-100 text-base 
        w-full rounded-full
        ${click ? 'bg-green-600 text-white':
             'bg-linear-to-r from-indigo-600 to-purple-600' }
        `}>
       {click ?
        <span className='flex items-center gap-2'> 
        <IoCheckmarkSharp /> Added to cart</span> 
            : ' Buy Now'}
    </button>
    </div>
  </div>

</div>

);
};

export default ProductCard;