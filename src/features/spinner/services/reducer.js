import { SPINNER_ON_OFF } from './actions';

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
