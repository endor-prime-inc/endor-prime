import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      // Store quantity changes here?
    };
  }

  render() {
    const { cart, products } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-8 col-lg-10">
            <h5>Product Name</h5>
          </div>
          <div className="col-3 col-sm-2 col-lg-1">
            <h5>Quantity</h5>
          </div>
          <div className="col-3 col-sm-2 col-lg-1">
            <h5>Price</h5>
          </div>
        </div>
        {Object.keys(cart).map(id => {
          const quantity = cart[id];
          return (
            <div key={id} className="row my-1">
              <div className="col-6 col-sm-8 col-lg-10">
                {products[id].name}
              </div>
              <div className="col-3 col-sm-2 col-lg-1">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder={quantity}
                />
              </div>
              <div className="col-3 col-sm-2 col-lg-1">
                {products[id].price}
              </div>
            </div>
          );
        })}
        <div className="row">
          <div className="col-12">
            <button type="button" className="btn btn-secondary mt-3">
              Update Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  const { cart, products } = state;
  return { cart, products };
};

export default connect(mapState)(Cart);
