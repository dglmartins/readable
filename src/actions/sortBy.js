export const CHANGE_SORT_BY_PROP = 'CHANGE_SORT_BY_PROP';
export const CHANGE_SORT_BY_ORDER = 'CHANGE_SORT_BY_ORDER';

export function changeSortByProp (prop) {
  return {
    type: CHANGE_SORT_BY_PROP,
    prop
  }
}

export function changeSortByOrder (order) {
  return {
    type: CHANGE_SORT_BY_ORDER,
    order
  }
}
