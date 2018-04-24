import React from 'react';
import ProductItem from './ProductItem';
import ProductCard from './ProductCard';

const RenderProducts = props => {
  const { filteredProducts, listView } = props;
  return (
    <div className="container">
      <div className="row">
        {filteredProducts.map(product => {
          return listView ? (
            <ProductItem key={product.id} product={product} />
          ) : (
            <ProductCard key={product.id} product={product} />
          );
        })}
      </div>
    </div>
  );
};

export default RenderProducts;
