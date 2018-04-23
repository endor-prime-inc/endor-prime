/* eslint-env mocha,chai */

import { expect } from 'chai';
import { getCategories } from '../categories';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunks from 'redux-thunk';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
const mockAxios = new MockAdapter(axios);
const middlewares = [thunks.withExtraArgument({ axios, history })];
const mockStore = configureMockStore(middlewares);

describe('thunk creators', () => {
  let store;
  const initialState = { categories: {} };

  beforeEach(() => {
    mockAxios.reset();
    store = mockStore(initialState);
  });

  describe('getCategories', () => {
    it('eventually dispatches the SET_ALL_CATEGORIES action', async () => {
      const fakeCategories = [
        { id: 1, name: 'Lightsabers' },
        { id: 2, name: 'Weapons' }
      ];
      mockAxios.onGet('/api/categories').replyOnce(200, fakeCategories);

      await store.dispatch(getCategories()); // This line
      console.log(store);
      // const [getUserAction] = store.getActions();
      // expect(getUserAction.type).to.be.equal('SET_ALL_CATEGORIES');
      // expect(getUserAction.allCategories).to.be.deep.equal(fakeCategories);
    });
  });

  // describe('logout', () => {
  //   it('logout: eventually dispatches the REMOVE_USER action', async () => {
  //     mockAxios.onDelete('/auth').replyOnce(204);
  //     await store.dispatch(logout());
  //     const [removeUserAction] = store.getActions();
  //     expect(removeUserAction.type).to.be.equal('REMOVE_USER');
  //     expect(history.location.pathname).to.be.equal('/');
  //   });
  // });
});
