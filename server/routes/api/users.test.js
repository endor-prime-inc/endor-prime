/* eslint-env mocha,chai */

const { expect } = require('chai');
const request = require('supertest');
const { db, User } = require('../../db');
const app = require('../../app');

describe('User routes', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
  });

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com';
    const codysPwd = '123';

    beforeEach(async () => {
      await User.create({
        email: codysEmail,
        password: codysPwd
      });
    });

    it('GET /api/users', async () => {
      await request(app)
        .get('/api/users')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].email).to.be.equal(codysEmail);
        });
    });
  }); // end describe('/api/users')
}); // end describe('User routes')
