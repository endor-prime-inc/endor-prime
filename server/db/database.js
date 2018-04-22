const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/endor-prime',
  {
    logging: false
  }
);

module.exports = db;
