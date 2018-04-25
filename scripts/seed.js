#!/usr/bin/env node

const {
  db,
  User,
  Product,
  Category,
  Review,
  Order,
  OrderProducts
} = require('../server/db');

const seed = async () => {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({ email: 'lukeskywalker@jedimail.com', password: '1138' }),
    User.create({
      email: 'darthvader@sithmail.com',
      password: '1138',
      isAdmin: true
    })
  ]);

  const categories = await Promise.all([
    Category.create({ name: 'Podracers' }),
    Category.create({ name: 'Weapons' }),
    Category.create({ name: 'Elegant Weapons' }),
    Category.create({ name: 'Attire' }),
    Category.create({ name: 'Ships' }),
    Category.create({ name: 'Droids' })
  ]);

  const products = await Promise.all([
    Product.create({
      name: 'Jedi Lightsaber',
      description: 'For the good guys',
      price: 20000,
      quantity: 5,
      pictures: ['/images/Jedi Lightsaber.jpg']
    }).then(product => product.setCategories(3)),
    Product.create({
      name: 'Sith Lightsaber',
      description: `You don't know the power of the dark side...`,
      price: 24000,
      quantity: 7,
      pictures: ['/images/Sith Lightsaber.jpg']
    }).then(product => product.setCategories(3)),
    Product.create({
      name: 'Podracer #1',
      description: `Anakin's old podracer.  Mostly intact.`,
      price: 12000,
      quantity: 1,
      pictures: ['/images/Podracer.png']
    }).then(product => product.setCategories(1)),
    Product.create({
      name: 'Stormtrooper Blaster',
      description: 'You rebel scum!',
      price: 2000,
      quantity: 15,
      pictures: ['/images/Stormtrooper E-11 Blaster.png']
    }).then(product => product.setCategories(2)),
    Product.create({
      name: 'Stormtrooper Suit',
      description: 'Light and breezy',
      price: 5000,
      quantity: 18,
      pictures: ['/images/Stormtrooper Suit.jpg']
    }).then(product => product.setCategories(4)),
    Product.create({
      name: 'Insulated Stormtrooper Suit',
      description: 'For those long hauls on Hoth',
      price: 6000,
      quantity: 10,
      pictures: ['/images/Insulated Stormtrooper Suit.jpg']
    }).then(product => product.setCategories(4)),
    Product.create({
      name: 'Rebel X-Wing',
      description: 'Classic Rebel fighter ship',
      price: 60000,
      quantity: 4,
      pictures: ['/images/Rebel X-Wing.jpg']
    }).then(product => product.setCategories(5)),
    Product.create({
      name: 'Rebel Fighter Helmet',
      description: 'Pre-wired for radio communication',
      price: 1000,
      quantity: 23,
      pictures: ['/images/Rebel Fighter Helmet.jpg']
    }).then(product => product.setCategories(4)),
    Product.create({
      name: 'Podracer #2',
      description: 'Excellent handling',
      price: 16000,
      quantity: 2,
      pictures: ['/images/Podracer2.jpg']
    }).then(product => product.setCategories(1)),
    Product.create({
      name: 'Imperial I-class Star Destroyer',
      description: `Don't ask us how we got this`,
      price: 1000000,
      quantity: 1,
      pictures: ['/images/Imperial I-class Star Destroyer.png']
    }).then(product => product.setCategories(5)),
    Product.create({
      name: 'Millennium Falcon',
      description: `It's the ship that made the Kessel Run in less than 12 parsecs`,
      price: 50000,
      quantity: 1,
      pictures: ['/images/Millennium Falcon.jpg']
    }).then(product => product.setCategories(5)),
    Product.create({
      name: 'Yoda',
      description: 'Infinite wisdom at your fingertips',
      price: 500000,
      quantity: 1,
      pictures: ['/images/Yoda.jpg']
    }).then(product => product.setCategories(3)),
    Product.create({
      name: 'R2D2',
      description:
        'Old model and highly opinionated.  May contain secret messages.  Beep boop beep.',
      price: 10000,
      quantity: 1,
      pictures: ['/images/R2D2.jpg']
    }).then(product => product.setCategories(6))
  ]);

  const reviews = await Promise.all([
    Review.create({
      content: 'Pretty good',
      rating: 4,
      productId: 2,
      userId: 1
    }),
    Review.create({ content: 'Meh', rating: 2, productId: 1, userId: 2 }),
    Review.create({ content: 'Bad', rating: 1, productId: 4, userId: 2 }),
    Review.create({
      content: 'Great! 5 stars!',
      rating: 5,
      productId: 2,
      userId: 1
    }),
    Review.create({
      content: 'Pretty good',
      rating: 4,
      productId: 3,
      userId: 2
    }),
    Review.create({ content: 'Meh', rating: 2, productId: 3, userId: 1 }),
    Review.create({ content: 'Meh', rating: 2, productId: 4, userId: 2 })
  ]);

  const orders = await Promise.all([
    Order.create({ email: 'darthvader@sithmail.com', status: 'cancelled' }),
    Order.create({ email: 'lukeskywalker@jedimail.com', status: 'completed' }),
    Order.create({
      email: 'anakinskywalker@jedimail.com',
      status: 'completed'
    }),
    Order.create({ email: 'bobafett@bountymail.com', status: 'created' }),
    Order.create({ email: 'yoda@jedimail.com', status: 'processing' })
  ]);

  const orderProducts = await Promise.all([
    OrderProducts.create({
      orderId: 2,
      productId: 3,
      price: 2000,
      quantity: 1
    }),
    OrderProducts.create({
      orderId: 2,
      productId: 2,
      price: 4000,
      quantity: 1
    }),
    OrderProducts.create({
      orderId: 2,
      productId: 4,
      price: 8900,
      quantity: 1
    }),
    OrderProducts.create({
      orderId: 1,
      productId: 3,
      price: 2000,
      quantity: 2
    }),
    OrderProducts.create({
      orderId: 1,
      productId: 2,
      price: 4000,
      quantity: 3
    }),
    OrderProducts.create({ orderId: 1, productId: 4, price: 8900, quantity: 2 })
  ]);

  console.log(`seeded ${users.length} users`);
  console.log('email: ', users[0].email, ' password: 123');
  console.log('email: ', users[1].email, ' password: 123');
  console.log(`seeded successfully`);
};

seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    console.log('closing db connection');
    db.close();
    console.log('db connection closed');
  });

console.log('seeding...');
