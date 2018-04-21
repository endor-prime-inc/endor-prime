const SET_ADMIN_SEARCH = 'SET_ADMIN_SEARCH';

export const setAdminSearch = searchTerm => ({
  type: SET_ADMIN_SEARCH,
  searchTerm
});

const reducer = (state = '', action) => {
  switch (action.type) {
    case SET_ADMIN_SEARCH:
      return action.searchTerm;
    default:
      return state;
  }
};

export default reducer;
