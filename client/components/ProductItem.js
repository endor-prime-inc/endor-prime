import React from 'react';
import { Link } from 'react-router-dom';
import AdminLink from './auth/AdminLink';

const ProductItem = ({ product, adminView }) => {
  return (
    <div className="col-12 mt-3">
      <div className="row">
        <div className="col-2">
          {adminView ? product.quantity : product['order-products'].quantity}
        </div>
        <div className="col-8">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </div>
        <div className="col">
          {adminView ? (
            <AdminLink
              to={`/products/${product.id}/edit`}
              className="btn btn-warning float-right"
            >
              Edit
            </AdminLink>
          ) : (
            <Link
              to={`/products/${product.id}/add-review`}
              className="btn btn-warning float-right"
            >
              Review
            </Link>
          )}
        </div>
        <div className="col">
          {adminView
            ? product.price
            : product['order-products'].price *
              product['order-products'].quantity}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
