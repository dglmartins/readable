import { CHANGE_SORT_BY_PROP, CHANGE_SORT_BY_ORDER } from '../actions/sortBy';

const intialState = {prop: 'voteScore', order: 'ascend'}

export function sortBy (state = intialState, action) {
  switch (action.type) {
    case CHANGE_SORT_BY_PROP:
      return {
        ...state,
        prop: action.prop
      }
      case CHANGE_SORT_BY_ORDER:
        return {
          ...state,
          order: action.order
        }
    default:
      return state;
  }
}
