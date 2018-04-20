// Action types
const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES';
const SET_CATEGORY = 'SET_CATEGORY';
const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

// Action creators
const setAllCategories = allCategories => ({
  type: SET_ALL_CATEGORIES,
  allCategories
});
const setCategory = category => ({ type: SET_CATEGORY, category });
const removeCategory = id => ({ type: REMOVE_CATEGORY, id });

// Thunk creators
export const getCategories = () => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.get(`/api/categories`);
    const allCategories = data.reduce((accumulator, category) => {
      accumulator[category.id] = category;
      return accumulator;
    }, {});
    dispatch(setAllCategories(allCategories));
  } catch (error) {
    console.error(error);
  }
};

// export const getCategory = id => async (dispatch, _, { axios }) => {
//   try {
//     const { data } = await axios.get(`/api/categories/${id}`);
//     dispatch(setCategory(data));
//   } catch (error) {
//     console.error(error);
//   }
// };

export const postCategory = formData => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.post(`/api/categories`, formData);
    dispatch(setCategory(data));
  } catch (error) {
    console.error(error);
  }
};

export const putCategory = (id, formData) => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.put(`/api/categories/${id}`, formData);
    dispatch(setCategory(data));
  } catch (error) {
    console.error(error);
  }
};

export const deleteCategory = id => async (dispatch, _, { axios }) => {
  try {
    await axios.delete(`/api/categories/${id}`);
    dispatch(removeCategory(id));
  } catch (error) {
    console.error(error);
  }
};

// Reducer helper function
const removeFromCategories = (state, { id }) => {
  const newState = { ...state };
  delete newState[id];
  return newState;
};

// Default State
const defaultState = {};

// Category Reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ALL_CATEGORIES:
      return action.allCategories;
    case SET_CATEGORY:
      return { ...state, [action.category.id]: action.category };
    case REMOVE_CATEGORY:
      return removeFromCategories(state, action);
    default:
      return state;
  }
};
