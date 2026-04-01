import React from 'react';
import ProductCard from './ProductCard';

const ProductsData = ({digitalToolsData,selectedCarts, setSelectedCarts}) => {
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                digitalToolsData.map(product =>
                <ProductCard 
           
                selectedCarts={selectedCarts}
                setSelectedCarts={setSelectedCarts}
                key={product.id}
                 product={product}></ProductCard> )
            }
        </div>
    );
};

export default ProductsData;