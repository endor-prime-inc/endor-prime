const db = require('./database');
const User = require('./user');
const Product = require('./product');
const Category = require('./category');
const Review = require('./review');
const Order = require('./order');

Product.belongsToMany(Category, { through: 'category-product' });
Category.belongsToMany(Product, { through: 'category-product' });

Order.belongsToMany(User, { through: 'order-user' });
User.belongsToMany(Order, { through: 'order-user' });

Review.belongsTo(Product);
Review.belongsTo(User);
Product.hasMany(Review);
User.hasMany(Review);

module.exports = {
  db,
  User,
  Product,
  Category,
  Review,
  Order
};
