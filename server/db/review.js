const Sequelize = require('sequelize');
const db = require('./database');

const Review = db.define('review', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: [2, 1000]
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
});

module.exports = Review;
