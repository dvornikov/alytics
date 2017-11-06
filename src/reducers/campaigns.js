import { RECEIVE_CAMPAIGNS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CAMPAIGNS:
      return [
        ...action.payload
      ];

    default:
      return state;
  }
}
