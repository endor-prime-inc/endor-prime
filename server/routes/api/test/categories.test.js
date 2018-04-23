/* eslint-env mocha,chai */

const { expect } = require('chai');
const request = require('supertest');
const { db, Category } = require('../../../db');
const app = require('../../../app');

describe('Category routes', () => {
  beforeEach(async () => {
    await db.sync({ force: true });
  });

  describe('/api/categories/', () => {
    const blasters = 'Blasters';

    beforeEach(async () => {
      await Category.create({
        name: blasters
      });
    });

    it('GET /api/categories', async () => {
      await request(app)
        .get('/api/categories')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].name).to.equal(blasters);
        });
    });
    it('GET /api/categories/:id', async () => {
      await request(app)
        .get('/api/categories/1')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.equal(blasters);
        });
    });
    it('POST /api/categories returns the newly saved object', async () => {
      await request(app)
        .post('/api/categories')
        .send({ name: 'Elegant Weapons' })
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.name).to.equal('Elegant Weapons');
        });
    });
    it('POST /api/categories returns an error if there is no name', async () => {
      await request(app)
        .post('/api/categories')
        .expect(500);
    });
    it('PUT /api/categories/id', async () => {
      await request(app)
        .post('/api/categories')
        .send({ name: 'Sabers' })
        .then(res => {
          return res.body.id;
        })
        .then(async (id) => {
          await request(app)
          .put(`/api/categories/${id}`)
          .send({ name: 'Lightsabers' })
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('object');
            expect(res.body.name).to.equal('Lightsabers');
          });
        });
    });
    it('DELETE /api/categories/id deletes a category from the database', async () => {
      await request(app)
        .post('/api/categories')
        .send({ name: 'Sabers' })
        .then(res => res.body.id)
        .then(async (id) => {
          await request(app)
          .delete(`/api/categories/${id}`)
          .send({ name: 'Lightsabers' })
          .expect(200)
          .then(res => res.body.id)
          .then(async (id) => {
            await request(app)
              .get(`/api/categories/${id}`)
              .expect(404);
          });
        });
    });
  });
});
