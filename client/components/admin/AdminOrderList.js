import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../store/orders';
import OrdersList from '../OrdersList';

const mapState = ({ orders }) => ({ orders });

const mapDispatch = dispatch => ({
  getOrders: () => dispatch(getOrders())
});

class AdminOrderList extends Component {
  componentDidMount = () => {
    this.props.getOrders();
  };

  render() {
    const { orders } = this.props;
    console.log(orders);
    return Object.keys(orders).length ? (
      <div className="container">
        <div className="row mt-3">
          <OrdersList
            orders={Object.keys(orders).map(id => orders[id])}
            listView={true}
            adminView={true}
          />
        </div>
      </div>
    ) : (
      <div />
    );
  }
}
export default connect(mapState, mapDispatch)(AdminOrderList);
