// Action types
const SET_ALL_REVIEWS = 'SET_ALL_REVIEWS';
const SET_REVIEW = 'SET_REVIEW';
const REMOVE_REVIEW = 'REMOVE_REVIEW';

// Action creators
const setAllReviews = allReviews => ({ type: SET_ALL_REVIEWS, allReviews });
const setReview = review => ({ type: SET_REVIEW, review });
const removeReview = id => ({ type: REMOVE_REVIEW, id });

// Thunk creators
export const getReviews = () => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.get(`/api/reviews`);
    const allReviews = data.reduce((accumulator, review) => {
      accumulator[review.id] = review;
      return accumulator;
    }, {});
    dispatch(setAllReviews(allReviews));
  } catch (error) {
    console.error(error);
  }
};

// export const getReview = id => async (dispatch, _, { axios }) => {
//   try {
//     const { data } = await axios.get(`/api/reviews/${id}`);
//     dispatch(setReview(data));
//   } catch (error) {
//     console.error(error);
//   }
// };

export const postReview = formData => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.post(`/api/reviews`, formData);
    dispatch(setReview(data));
  } catch (error) {
    console.error(error);
  }
};

export const putReview = (id, formData) => async (dispatch, _, { axios }) => {
  try {
    const { data } = await axios.put(`/api/reviews/${id}`, formData);
    dispatch(setReview(data));
  } catch (error) {
    console.error(error);
  }
};

export const deleteReview = id => async (dispatch, _, { axios }) => {
  try {
    await axios.delete(`/api/reviews/${id}`);
    dispatch(removeReview(id));
  } catch (error) {
    console.error(error);
  }
};

// Reducer helper function
const removeFromReviews = (state, { id }) => {
  const newState = { ...state };
  delete newState[id];
  return newState;
};

// Default State
const defaultState = {};

// Reviews Reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_ALL_REVIEWS:
      return action.allReviews;
    case SET_REVIEW:
      return { ...state, [action.review.id]: action.review };
    case REMOVE_REVIEW:
      return removeFromReviews(state, action);
    default:
      return state;
  }
};
