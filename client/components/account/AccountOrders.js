import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrdersList from '../OrdersList';
import { getOrders } from '../../store/orders';

class AccountOrders extends Component {
  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    return Object.keys(this.props.orders).length ? (
      <OrdersList orders={this.props.orders} />
    ) : (
      <div />
    );
  }
}

const mapState = state => {
  const { user, orders } = state;
  const userFilteredOrders = Object.keys(orders)
    .map(id => orders[id])
    .filter(order => {
      return order.email === user.email;
    });
  return { user, orders: userFilteredOrders };
};

const mapDispatch = dispatch => ({
  getOrders: () => dispatch(getOrders())
});

export default connect(mapState, mapDispatch)(AccountOrders);
