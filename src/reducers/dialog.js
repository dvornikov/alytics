import { TOGGLE_DIALOG } from '../actions';

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_DIALOG:
      return !state;

    default:
      return state;
  }
}
