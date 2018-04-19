// Action types
const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS';
const SET_PRODUCT = 'SET_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

// Action creators
const setAllProducts = allProducts => ({ type: SET_ALL_PRODUCTS, allProducts });
const setProduct = product => ({ type: SET_PRODUCT, product });
const removeProduct = id => ({ type: REMOVE_PRODUCT, id });

// Thunk creators
export const getProducts = () => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.get(`/api/products`);
    const allProducts = data.reduce((accumulator, product) => {
      accumulator[product.id] = product;
      return accumulator;
    }, {});
    dispatch(setAllProducts(allProducts));
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = id => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setProduct(data));
  } catch (error) {
    console.error(error);
  }
};

export const postProduct = formData => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.post(`/api/products`, formData);
    dispatch(setProduct(data));
  } catch (error) {
    console.error(error);
  }
};

export const putProduct = (id, formData) => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.put(`/api/products/${id}`, formData);
    dispatch(setProduct(data));
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = id => async (dispatch, _, { axios }) => {
  try {
    await axios.delete(`/api/products/${id}`);
    dispatch(removeProduct(id));
  } catch (error) {
    console.error(error);
  }
};

// Reducer helper function
const removeFromProducts = (state, { id }) => {
  const newState = { ...state };
  delete newState[id];
  return newState;
};

// Default State
const defaultState = {};

// Product Catalog Reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return action.allProducts;
    case SET_PRODUCT:
      return { ...state, [action.product.id]: action.product };
    case REMOVE_PRODUCT:
      return removeFromProducts(state, action);
    default:
      return state;
  }
};
