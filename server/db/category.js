const Sequelize = require('sequelize');
const db = require('./database');

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Category;
