export const CHANGE_SORT_BY_PROP = 'CHANGE_SORT_BY_PROP';
export const CHANGE_SORT_BY_ORDER = 'CHANGE_SORT_BY_ORDER';
export const RESET_SORT_BY = 'RESET_SORT_BY';

export function changeSortByProp (prop) {
  return {
    type: CHANGE_SORT_BY_PROP,
    prop
  };
};

export function changeSortByOrder (order) {
  return {
    type: CHANGE_SORT_BY_ORDER,
    order
  };
};

export function resetSortBy () {
  return {
    type: RESET_SORT_BY
  };
};
