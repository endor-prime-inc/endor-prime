import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
      <div className="container">
        <h3>Checkout</h3>
        <hr />
        <form>
          <div className="form-group">
            <label htmlFor="address1">Address</label>
            <input
              type="text"
              className="form-control"
              id="address1"
              name="address1"
              value="1138 Skywalker Lane"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address2">Address 2</label>
            <input
              type="text"
              className="form-control"
              id="address2"
              name="address2"
              value="Apartment, Studo, or Floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="state">State</label>
              <select id="state" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                value="34242"
              />
            </div>
          </div>
          <hr />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value="lukeskywalker@jedimail.com"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="payment">Payment Type</label>
              <select id="payment" className="form-control">
                <option selected>-</option>
                <option>CreditPal</option>
                <option>Imperial Express</option>
                <option>Visa</option>
                <option>RebelCard</option>
                <option>Endor Payments</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary float-right mt-3">
            Finish Checkout
          </button>
        </form>
      </div>
    );
  }
}

export default Checkout;
