export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';

export function getCategories (categories) {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  };
};
