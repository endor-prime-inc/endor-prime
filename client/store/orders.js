// Action types
const SET_ALL_ORDERS = 'SET_ALL_ORDERS';
const SET_ORDER = 'SET_ORDER';
// const REMOVE_ORDER = 'REMOVE_ORDER';

// Action creators
const setAllOrders = allOrders => ({ type: SET_ALL_ORDERS, allOrders });
const setOrder = order => ({ type: SET_ORDER, order });
// const removeOrder = id => ({ type: REMOVE_ORDER, id });

// Thunk creators
export const getOrders = () => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.get(`/api/orders`);
    const allOrders = data.reduce((accumulator, order) => {
      accumulator[order.id] = order;
      return accumulator;
    }, {});
    dispatch(setAllOrders(allOrders));
  } catch (error) {
    console.error(error);
  }
};

export const getOrder = id => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.get(`/api/orders/${id}`);
    dispatch(setOrders(data));
  } catch (error) {
    console.error(error);
  }
};

export const postOrder = formData => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.post(`/api/orders`, formData);
    dispatch(setOrder(data));
  } catch (error) {
    console.error(error);
  }
};

export const putOrder = (id, formData) => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.put(`/api/orders/${id}`, formData);
    dispatch(setOrder(data));
  } catch (error) {
    console.error(error);
  }
};

// export const deleteOrder = id => async (dispatch, _, { axios }) => {
//   try {
//     await axios.delete(`/api/orders/${id}`);
//     dispatch(removeOrder(id));
//   } catch (error) {
//     console.error(error);
//   }
// };

// Reducer helper function
// const removeFromOrders = (state, { id }) => {
//   const newState = { ...state };
//   delete newState[id];
//   return newState;
// };

// Default State
const defaultState = {};

// Product Catalog Reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ALL_ORDERS:
      return action.allOrders;
    case SET_ORDER:
      return { ...state, [action.order.id]: action.order };
    // case REMOVE_ORDER:
    //   return removeFromOrders(state, action);
    default:
      return state;
  }
};
