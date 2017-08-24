import { SPINNER_ON_OFF } from '../actions/spinner';

export function spinner (state = {spinnerOn: false}, action) {
  switch (action.type) {
    case SPINNER_ON_OFF:
      return {
        ...state,
        spinnerOn: action.spinner
      };
    default:
      return state;
  }
}
