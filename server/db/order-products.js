const db = require('./database');
const Sequelize = require('sequelize');

const OrderProducts = db.define('order-products', {
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = OrderProducts;
