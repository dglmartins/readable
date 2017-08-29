import { CHANGE_SORT_BY_PROP, CHANGE_SORT_BY_ORDER } from '../actions/sortBy';

const intialState = {
  prop: 'voteScore',
  order: 'descend',
  sortOptionsPosts: [
    {name: 'votes', prop: 'voteScore'},
    {name: 'date', prop: 'timestamp'},
    {name: 'title', prop: 'title'},
    {name: 'comment count', prop: 'commentCount'},
    {name: 'author', prop: 'author'},
    {name: 'category', prop: 'category'}
  ],
  sortOptionsComments: [
    {name: 'votes', prop: 'voteScore'},
    {name: 'date', prop: 'timestamp'},
    {name: 'author', prop: 'author'},
  ]
}

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
