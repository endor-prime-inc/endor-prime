#!/usr/bin/env node

const { db, User, Category } = require('../server/db');

const seed = async () => {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'grace@hopper.com', password: '123' })
  ]);

  const categories = await Promise.all([
    Category.create({ name: 'droids' }),
    Category.create({ name: 'weapons' }),
    Category.create({ name: 'podracers' })
  ]);

  console.log(`seeded ${users.length} users`);
  console.log('email: ', users[0].email, ' password: 123');
  console.log('email: ', users[1].email, ' password: 123');
  console.log('category1: ', categories[0].name);
  console.log('category2: ', categories[1].name);
  console.log('category3: ', categories[2].name);
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
