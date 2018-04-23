import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCart } from '../store/cart';

// Still causes a one time error when first loading the cart with a product

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      localCart: {},
      globalCartTotal: 0
    };
  }

  componentDidMount = () => {
    const { cart } = this.props;
    this.setState({
      localCart: { ...cart },
      globalCartTotal: this.getCartTotal()
    });
  };

  handleChange = event => {
    this.setState({
      localCart: {
        ...this.state.localCart,
        [event.target.name]: +event.target.value
      }
    });
  };

  // getCartTotal needs to wait for the global cart store to update
  handleSubmit = async event => {
    event.preventDefault();
    const { localCart } = this.state;
    Object.keys(localCart).forEach(id => {
      if (localCart[id] === 0) delete localCart[id];
    });
    await this.props.changeCart(localCart);
    this.setState({
      globalCartTotal: this.getCartTotal()
    });
  };

  getCartTotal = (cart = this.props.cart) => {
    const { products } = this.props;
    return Object.keys(cart).reduce((sum, id) => {
      sum += products[id].price * cart[id];
      return sum;
    }, 0);
  };

  render() {
    const { cart, products } = this.props;
    const { localCart, globalCartTotal } = this.state;
    const buttonStatus =
      globalCartTotal === this.getCartTotal(localCart)
        ? 'secondary'
        : 'warning';

    return (
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-8 col-lg-10">
            <h5>Product Name</h5>
          </div>
          <div className="col-3 col-sm-2 col-lg-1">
            <h5 className="float-right">Quantity</h5>
          </div>
          <div className="col-3 col-sm-2 col-lg-1">
            <h5>Price</h5>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          {Object.keys(cart).map(id => {
            const max = products[id].quantity;
            const quantity = localCart[id];
            const validity = max >= quantity ? 'is-valid' : 'is-invalid';
            return (
              <div key={id} className="row my-3">
                <div className="col-6 col-sm-8 col-lg-10">
                  {products[id].name}
                </div>
                <div className="col-3 col-sm-2 col-lg-1">
                  <input
                    className={`form-control form-control-sm float-right ${validity}`}
                    type="number"
                    name={id}
                    value={quantity}
                    onChange={this.handleChange}
                    min="0"
                  />
                  <div className="invalid-feedback">Max: {max}</div>
                </div>
                <div className="col-3 col-sm-2 col-lg-1">
                  {products[id].price}
                </div>
              </div>
            );
          })}
          <hr />
          <div className="row">
            <div className="col-6 col-sm-8 col-lg-10">
              <button
                type="submit"
                className={`btn btn-${buttonStatus} float-right`}
              >
                Update Cart
              </button>
            </div>
            <div className="col-3 col-sm-2 col-lg-1">
              <h5 className="float-right">Total:</h5>
            </div>
            <div className="col-3 col-sm-2 col-lg-1">{globalCartTotal}</div>
          </div>
        </form>
        <div className="row mt-5">
          <div className="col-12">
            <button type="button" className="btn btn-success float-right">
              Checkout >>
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

const mapDispatch = dispatch => {
  return {
    changeCart: async cart => {
      await dispatch(changeCart(cart));
    }
  };
};

export default connect(mapState, mapDispatch)(Cart);
