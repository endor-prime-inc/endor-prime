import React from 'react';
import { connect } from 'react-redux';

const OrderView = ({ match, orders }) => (
  <div id="order-view" className="container my-2">
    <div id="product-overview" className="row">
      todo
    </div>
  </div>
);

const mapState = (state, ownProps) => ({
  order: state.orders[ownProps.match.params.id]
});

export default connect(mapState)(OrderView);
