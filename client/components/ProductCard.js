import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeCart } from '../store/cart';

const ProductCard = props => {
  const { product, cart } = props;

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
          <Link to={`/products/${product.id}`} className="btn btn-primary mr-3">
            Info
          </Link>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.changeCart({
                ...cart,
                [product.id]: cart[product.id] + 1 || 1
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapState = state => {
  const { cart } = state;
  return { cart };
};

const mapDispatch = dispatch => {
  return {
    changeCart: cart => {
      dispatch(changeCart(cart));
    }
  };
};

export default connect(mapState, mapDispatch)(ProductCard);
