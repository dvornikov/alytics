import { RECEIVE_VISIBILITY } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_VISIBILITY:
      return [
        ...action.payload
      ];

    default:
      return state;
  }
}
