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
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INT,
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
    validate: {
      notEmpty: true,
      defaultValue: ['/images/defaultImage.jpg']
    }
  }
});

module.exports = Product;
