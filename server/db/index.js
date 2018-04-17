const db = require('./database');
const User = require('./user');
const Product = require('./product');
const Category = require('./category');
const Review = require('./review');
const Order = require('./order');
const OrderProducts = require('./order-products');

Product.belongsToMany(Category, { through: 'category-products' });
Category.belongsToMany(Product, { through: 'category-products' });

Review.belongsTo(Product);
Product.hasMany(Review);

Review.belongsTo(User);
User.hasMany(Review);

Product.belongsToMany(Order, { through: OrderProducts });
Order.belongsToMany(Product, { through: OrderProducts });

module.exports = {
  db,
  User,
  Product,
  Category,
  Review,
  Order,
  OrderProducts
};
