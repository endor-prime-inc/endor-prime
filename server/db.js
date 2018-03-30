const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/YOUR_DB')

module.exports = db
