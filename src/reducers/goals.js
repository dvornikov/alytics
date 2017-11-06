import { RECEIVE_GOALS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_GOALS:
      return [
        ...action.payload
      ];

    default:
      return state;
  }
}
