import React from 'react';
import { Link } from 'react-router-dom';

const OrderItem = props => {
  const { order } = props;

  return (
    <li className="list-group-item">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Order #{order.id}</h5>
          <p className="card-text">Order placed: {order.createdAt}</p>
          <p className="card-text">Order status: {order.status}</p>
          <Link
            to={`/account/orders/${order.id}`}
            className="btn btn-primary mr-3"
          >
            Details
          </Link>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
