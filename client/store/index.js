import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunks from 'redux-thunk';
import axios from 'axios';
import history from '../history';
import user from './user';
import products from './products';
import categories from './categories';
import reviews from './reviews';

const reducer = combineReducers({ user, products, categories, reviews });

const store = createStore(
  reducer,
  applyMiddleware(thunks.withExtraArgument({ axios, history }), logger)
);

export default store;
