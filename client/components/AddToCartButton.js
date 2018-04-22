import React from 'react';
import { connect } from 'react-redux';

import { changeCart } from '../store/cart';

const AddToCartButton = ({ cart, changeCart: putCart, productId }) => (
  <button
    type="button"
    className="btn btn-success"
    onClick={() => {
      putCart({
        ...cart,
        [productId]: cart[productId] + 1 || 1
      });
    }}
  >
    Add to Cart
  </button>
);

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

export default connect(mapState, mapDispatch)(AddToCartButton);
