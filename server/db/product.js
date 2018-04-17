const Sequelize = require('sequelize');
const db = require('./database');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  available: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  pictures: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
    defaultValue: ['/images/defaultImage.jpg'],
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Product;
