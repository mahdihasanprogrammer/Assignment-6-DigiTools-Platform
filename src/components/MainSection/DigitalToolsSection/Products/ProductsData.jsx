import React from 'react';
import ProductCard from './ProductCard';

const ProductsData = ({digitalToolsData}) => {
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                digitalToolsData.map(product =>
                <ProductCard
                key={product.id}
                 product={product}></ProductCard> )
            }
        </div>
    );
};

export default ProductsData;