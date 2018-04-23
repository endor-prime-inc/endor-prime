import React from 'react';
import OrderItem from './OrderItem';

const OrdersList = ({ orders }) => (
  <div className="container">
    <ul className="list-group">
      {orders.map(order => {
        return <OrderItem key={order.id} order={order} />;
      })}
    </ul>
  </div>
);

export default OrdersList;
