const db = require('./database');
const Sequelize = require('sequelize');

const Order = db.define('orders', {
  // We need to associate an order with an email address to accomodate
  // order from authenticated as well as unauthenticated users.
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  status: {
    type: Sequelize.ENUM,
    values: ['created', 'processing', 'cancelled', 'completed'],
    allowNull: false
  }
});

// The rest of the fields will be in a join table which associates orders
// with products at a given price and quantity.

module.exports = Order;
