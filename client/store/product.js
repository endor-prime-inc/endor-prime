// Action types
const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS';
const SET_PRODUCT = 'SET_PRODUCT';

// Action creators
const setAllProducts = allProducts => ({ type: SET_ALL_PRODUCTS, allProducts });
export const setProduct = currentProduct => ({
  type: SET_PRODUCT,
  currentProduct
});

// Thunk creators
export const getProducts = () => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.get(`/api/products`);
    dispatch(setAllProducts(data));
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

// Default State
const defaultState = {
  allProducts: [],
  currentProduct: {}
};

// Product Reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return { ...state, allProducts: action.allProducts };
    case SET_PRODUCT:
      return { ...state, currentProduct: action.currentProduct };
    default:
      return state;
  }
};
