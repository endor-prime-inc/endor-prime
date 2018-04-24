import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = props => {
  const { product } = props;
  return (
    <div className="col-12 mt-3">
      <div className="row">
        <div className="col-2">{product.quantity}</div>
        <div className="col-8">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </div>
        <div className="col">
          <Link
            to={`/products/${product.id}/add-review`}
            className="btn btn-warning float-right"
          >
            Review
          </Link>
        </div>
        <div className="col">{product.price * product.quantity}</div>
      </div>
    </div>
  );
};

export default ProductItem;
