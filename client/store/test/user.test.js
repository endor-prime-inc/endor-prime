/* eslint-env mocha,chai */

import { expect } from 'chai';
import { me, logout } from '../user';
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
  const initialState = { user: {} };

  beforeEach(() => {
    history = createMemoryHistory();
    mockAxios = new MockAdapter(axios);
    middlewares = [thunks.withExtraArgument({ axios, history })];
    mockStore = configureMockStore(middlewares);
    mockAxios.reset();
    store = mockStore(initialState);
  });

  describe('me', () => {
    it('eventually dispatches the GET USER action', async () => {
      const fakeUser = { email: 'Cody' };
      mockAxios.onGet('/auth').replyOnce(200, fakeUser);
      await store.dispatch(me());
      const [getUserAction] = store.getActions();
      expect(getUserAction.type).to.be.equal('GET_USER');
      expect(getUserAction.user).to.be.deep.equal(fakeUser);
    });
  });

  describe('logout', () => {
    it('logout: eventually dispatches the REMOVE_USER action', async () => {
      mockAxios.onDelete('/auth').replyOnce(204);
      await store.dispatch(logout());
      const [removeUserAction] = store.getActions();
      expect(removeUserAction.type).to.be.equal('REMOVE_USER');
      expect(history.location.pathname).to.be.equal('/');
    });
  });
});
