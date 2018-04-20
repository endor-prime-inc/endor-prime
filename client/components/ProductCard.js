import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = props => {
  const { product } = props;
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <img
          className="card-img-top"
          src={product.pictures}
          alt="product image"
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <Link
            to={`/products/${product.id}`}
            className="btn btn-primary mr-3"
          >
            Info
          </Link>
          <Link to={`/products/`} className="btn btn-success">
            Buy! (temp)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
