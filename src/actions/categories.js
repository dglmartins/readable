export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

function getCategories (categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  }
};

export function getAllCategories () {
  return function(dispatch, getState, ReadableApi) {
    return ReadableApi.getAllCategories()
      .then((categories) => {
        dispatch(getCategories(categories));
      });
  }
}
