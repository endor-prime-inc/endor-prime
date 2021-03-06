import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunks from 'redux-thunk';
import axios from 'axios';
import history from '../history';
import user from './user';
import products from './products';
import adminSearch from './admin-search';
import categories from './categories';
import reviews from './reviews';
import cart from './cart';
import orders from './orders';

const reducer = combineReducers({
  user,
  products,
  categories,
  reviews,
  adminSearch,
  orders,
  cart
});

const store = createStore(
  reducer,
  applyMiddleware(thunks.withExtraArgument({ axios, history }), logger)
);

export default store;
