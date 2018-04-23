const Sequelize = require('sequelize');

const db = require('./database');
const statesAndTerritories = require('../../shared/states-territories.json');

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
  streetAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Skywalker Ranch',
    validate: {
      notEmpty: true
    }
  },
  // Apartment, Suite, etc.
  addressSecondary: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Nicasio',
    validate: {
      notEmpty: true
    }
  },
  state: {
    type: Sequelize.ENUM,
    values: Object.keys(statesAndTerritories),
    allowNull: false,
    defaultValue: 'CA'
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
