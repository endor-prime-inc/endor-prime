const chai = require('chai');
const { expect, should } = chai;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const { db, Category } = require('../index');

describe('Category model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('model definition', () => {
    it('rejects if name is null', async () => {
      await expect(Category.create()).to.be.rejected;
    });
    it('rejects if name is empty', async () => {
      await expect(Category.create({ name: '' })).to.be.rejected;
    });
    it('rejects if name is not unique', async () => {
      await Category.create({ name: 'Blasters'});
      await expect(Category.create({ name: 'Blasters' })).to.be.rejected;
    });
  });

});
