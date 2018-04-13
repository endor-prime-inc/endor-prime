import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'
import axios from 'axios'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(
  reducer,
  applyMiddleware(
    logger,
    thunks
      .withExtraArgument({axios})
  )
)

export default store
