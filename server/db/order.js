const Sequelize = require('sequelize');

const db = require('./database');

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
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Luke'
    validate: {
      notEmpty: true
    }
  },
  planet: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Tatooine',
    validate: {
      notEmpty: true
    },
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  status: {
    type: Sequelize.ENUM,
    values: ['created', 'processing', 'cancelled', 'completed'],
    allowNull: false,
    defaultValue: 'created'
  }
});

// The rest of the fields will be in a join table which associates orders
// with products at a given price and quantity.

module.exports = Order;
