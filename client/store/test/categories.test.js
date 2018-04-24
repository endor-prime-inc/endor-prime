/* eslint-env mocha,chai */

import { expect } from 'chai';
import {
  getCategories,
  postCategory,
  putCategory,
  deleteCategory
} from '../categories';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunks from 'redux-thunk';
import { createMemoryHistory } from 'history';

describe('thunk creators', () => {
  let history;
  let mockAxios;
  let middlewares;
  let mockStore;
  let store;
  const initialState = { categories: {} };

  beforeEach(() => {
    history = createMemoryHistory();
    mockAxios = new MockAdapter(axios);
    middlewares = [thunks.withExtraArgument({ axios, history })];
    mockStore = configureMockStore(middlewares);
    mockAxios.reset();
    store = mockStore(initialState);
  });

  describe('getCategories', () => {
    it('eventually dispatches the SET_ALL_CATEGORIES action', async () => {
      const fakeCategories = [
        { id: 1, name: 'Lightsabers' },
        { id: 2, name: 'Weapons' }
      ];
      const expectedResult = {
        1: { id: 1, name: 'Lightsabers' },
        2: { id: 2, name: 'Weapons' }
      };
      mockAxios.onGet('/api/categories').replyOnce(200, fakeCategories);
      await store.dispatch(getCategories());
      const [getCategoriesAction] = store.getActions();
      expect(getCategoriesAction.type).to.be.equal('SET_ALL_CATEGORIES');
      expect(getCategoriesAction.allCategories).to.be.deep.equal(
        expectedResult
      );
    });
  });

  describe('postCategory', () => {
    it('eventually dispatches the SET_CATEGORY action', async () => {
      const newCategory = { id: 1, name: 'Lightsabers' };
      mockAxios.onPost('/api/categories').replyOnce(201, newCategory);
      await store.dispatch(postCategory(newCategory));
      const [getCategoryAction] = store.getActions();
      expect(getCategoryAction.type).to.be.equal('SET_CATEGORY');
      expect(getCategoryAction.category).to.be.deep.equal(newCategory);
    });
  });

  describe('putCategory', () => {
    it('eventually dispatches the SET_CATEGORY action', async () => {
      const modifiedCategory = { id: 1, name: 'Lightsabers' };
      mockAxios.onPut('/api/categories/1').replyOnce(200, modifiedCategory);
      await store.dispatch(putCategory(1, modifiedCategory));
      const [getCategoryAction] = store.getActions();
      expect(getCategoryAction.type).to.be.equal('SET_CATEGORY');
      expect(getCategoryAction.category).to.be.deep.equal(modifiedCategory);
    });
  });

  describe('deleteCategory', () => {
    it('eventually dispatches the REMOVE_CATEGORY action', async () => {
      mockAxios.onDelete('/api/categories/1').replyOnce(200);
      await store.dispatch(deleteCategory(1));
      const [getCategoryAction] = store.getActions();
      expect(getCategoryAction.type).to.be.equal('REMOVE_CATEGORY');
      expect(getCategoryAction.id).to.equal(1);
    });
  });
});
