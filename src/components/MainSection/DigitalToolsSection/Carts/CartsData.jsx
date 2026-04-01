
import SingleCart from './SingleCart';
import cartIcon from '../../../../assets/assets/products/shopping-cart.png'
import { toast } from 'react-toastify';


const CartsData = ({selectedCarts,setSelectedCarts}) => {


const totalCartPrice =  selectedCarts.reduce((sum, selectedItem)=> sum + selectedItem.price,0);

// setTotalPrice(totalCartPrice);
// delete all product from cart tab when clicked proceed to checkout btn;
const deleteAllCartFromCartTab = ()=>{
    toast.warning('deleted all products from  cart');
    setSelectedCarts([])
}


    return (
        // cart tab container;
        <div className='shadow-lg rounded-2xl space-y-5 p-3 md:p-8 mt-10 border-2 border-gray-200'>

            <h1 className='text-xl font-semibold'>Your Cart</h1>

            {/* check condition, and show product in cart using map method */}
            { selectedCarts.length > 0?
                selectedCarts.map(cart =>
                    <SingleCart
                    setSelectedCarts={setSelectedCarts}
                     selectedCarts={selectedCarts}
                     key={cart.id} cart={cart} />)


                    //  show this container when cart is empty;
                    : <div className='py-20 text-center flex flex-col justify-center items-center gap-2'> 
                        <img className='size-6' src={cartIcon} alt="" />
                        <h1 className='font-medium text-gray-500'>Your cart is empty</h1>
                    </div>
            }

            {/* check condition,  show  total price of cart, and proceed checkout btn*/}
                {
                    selectedCarts.length >0 && 
                    <div className='space-y-5'>
                        <h1 
                        className='flex justify-between items-center text-xl font-semibold px-5'>
                            Total Price: <span className='text-2xl bg-linear-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text'>
                                ${totalCartPrice}</span>
                        </h1>


                        <button onClick={deleteAllCartFromCartTab}
                        className='bg-linear-to-r from-indigo-500 to bg-purple-500 text-white w-full rounded-full text-lg  py-2 active:translate-y-0.5 transition-all duration-200 cursor-pointer '>
                            Proceed to checkout
                        </button>
                    </div>
                }
        </div>
    );
};

export default CartsData;