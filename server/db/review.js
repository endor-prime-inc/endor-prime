const Sequelize = require('sequelize');
const db = require('./database');

const Review = db.define('review', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 5
    }
  }
});

module.exports = Review;
