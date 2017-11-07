import {
  RECEIVE_VISIBILITY,
  VISIBILITY_UPDATE,
  VISIBILITY_UPDATE_SUCCESS
} from '../actions';

export default (state = { loading: false, data: {}}, action) => {
  switch (action.type) {
    case RECEIVE_VISIBILITY:
      return {
        ...state,
        data: action.payload
      };

    case VISIBILITY_UPDATE:
      return {
        loading: true,
        data: action.payload
      };

    case VISIBILITY_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
