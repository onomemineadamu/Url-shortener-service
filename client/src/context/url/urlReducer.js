import { GET_SHORTURL, CLEAR_ERROR, SET_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SHORTURL:
      return {
        ...state,
        url: action.payload,
        loading: false
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
