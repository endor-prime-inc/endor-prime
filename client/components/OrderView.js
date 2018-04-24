import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrder } from '../store/orders';
import ProductList from './ProductList';

class OrderView extends Component {
  componentDidMount() {
    this.props.getOrder(this.props.match.params.id);
  }

  render() {
    const { order } = this.props;
    console.log(order);
    return order ? (
      <div id="order-view" className="container my-2">
        <h2>Order ID #{order.id}</h2>
        <p>Order placed: {order.createdAt}</p>
        <h3>Status: {order.status}</h3>
        <p>Recipient:</p>
        <address className="mx-4">
          {order.name}
          <br />
          {order.planet}
          <br />
          {order.latitude}, {order.longitude}
        </address>
        <div className="row">
          <div className="col-2">Quantity</div>
          <div className="col-8">Item</div>
          <div className="col" />
          <div className="col">Price</div>
        </div>
        <ProductList filteredProducts={order.products} listView={true} />
        <div className="row">
          <div className="col-10" />
          <div className="col-1">Subtotal: </div>
          <div className="col-1">
            {order.products.reduce(
              (acc, product) => product.quantity * product.price + acc,
              0
            )}
          </div>
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

const mapState = (state, ownProps) => ({
  order: state.orders[ownProps.match.params.id]
});

const mapDispatch = dispatch => ({
  getOrder: id => dispatch(getOrder(id))
});

export default connect(mapState, mapDispatch)(OrderView);
