import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { postOrder } from '../store/orders';
import ThankYouForYourOrder from './ThankYouForYourOrder';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      planet: 'Tatooine',
      latitude: 0,
      longitude: 0,
      payment: '-',
      card: '00-0000-000-000-00-0000-00',
      cart: {},
      completed: false
    };
  }

  componentDidMount = () => {
    this.setState({ cart: this.props.cart });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.postOrder(this.state).then(() => {
      this.setState({ completed: true });
    });
  };

  render() {
    const cartExists = Object.keys(this.props.cart).length;
    if (!cartExists) {
      return <Redirect to={`/cart`} />;
    }

    return this.state.completed ? (
      <ThankYouForYourOrder />
    ) : (
      <div className="container">
        <h3>Checkout</h3>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="planet">Planet</label>
              <input
                type="text"
                className="form-control"
                id="planet"
                name="planet"
                value={this.state.planet}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                step=".000001"
                min="-180"
                max="180"
                className="form-control"
                id="latitude"
                name="latitude"
                value={this.state.latitude}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                step=".000001"
                min="-180"
                max="180"
                className="form-control"
                id="longitude"
                name="longitude"
                value={this.state.longitude}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <hr />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="payment">Payment Type</label>
              <select
                id="payment"
                className="form-control"
                name="payment"
                value={this.state.payment}
                onChange={this.handleChange}
              >
                <option name="undefined">-</option>
                <option name="CreditPal">CreditPal</option>
                <option name="Imperial Express">Imperial Express</option>
                <option name="Visa">Visa</option>
                <option name="RebelCard">RebelCard</option>
                <option name="Endor Payments">Endor Payments</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="card">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="card"
                name="card"
                value={this.state.card}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary float-right mt-3">
            Complete Checkout
          </button>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  const { orders, cart, products } = state;
  return { orders, cart, products };
};

const mapDispatch = dispatch => {
  return {
    postOrder: async formData => {
      await dispatch(postOrder(formData));
    }
  };
};

export default connect(mapState, mapDispatch)(Checkout);
