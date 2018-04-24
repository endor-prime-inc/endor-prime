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
        <p>
          Recipient:<br />
          {order.name}
          <br />
          {order.planet}
          <br />
          {order.latitude}, {order.longitude}
        </p>
        <ProductList filteredProducts={order.products} listView={true} />
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
