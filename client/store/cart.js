// Action types
const SET_CART = 'SET_CART';

// Action creators
const setCart = cart => ({ type: SET_CART, cart });

// Thunk creators
export const getCart = () => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.get(`/api/cart`);
    dispatch(setCart(data));
  } catch (error) {
    console.error(error);
  }
};

export const changeCart = cart => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.put(`/api/cart`, cart);
    dispatch(setCart(data));
  } catch (error) {
    console.error(error);
  }
};

// Default State
const defaultState = {};

// Product Catalog Reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CART:
      return action.cart;
    default:
      return state;
  }
};
