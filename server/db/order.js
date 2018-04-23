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
  planet: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Tatooine',
    validate: {
      notEmpty: true
    },
  },
  region: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Mos Eisley',
    validate: {
      notEmpty: true
    }
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
