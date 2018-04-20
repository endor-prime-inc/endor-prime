import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = props => {
  const { product } = props;
  return (
    <div className="col-12 mt-3">
      <div className="row">
        <div className="col-1">{product.id}</div>
        <div className="col-5">{product.name}</div>
        <div className="col">
          <Link
            href={`/products/${product.id}`}
            className="btn btn-warning float-right"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
