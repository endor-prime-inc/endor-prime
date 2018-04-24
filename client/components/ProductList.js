import React from 'react';
import ProductItem from './ProductItem';
import ProductCard from './ProductCard';

const RenderProducts = props => {
  const { filteredProducts, listView, adminView } = props;
  return (
    <div className="container">
      <div className="row">
        {filteredProducts.map(product => {
          return listView ? (
            <ProductItem
              key={product.id}
              product={product}
              adminView={adminView}
            />
          ) : (
            <ProductCard
              key={product.id}
              product={product}
              adminView={adminView}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RenderProducts;
