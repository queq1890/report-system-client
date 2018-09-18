import {
  FETCH_GITHUB_USER_SUCCESS,
  FETCH_GITHUB_USER_FAILED,
  FETCH_GITHUB_USER,
} from './constants';

const initialState = {
  profile: {},
  err: {},
  loading: false,
};

const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_USER:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GITHUB_USER_SUCCESS:
      return {
        ...state,
        profile: action.receivedUser,
        loading: false,
      };
    case FETCH_GITHUB_USER_FAILED:
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
