import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILED,
} from './SigninFormContainer/constants';

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const initialState = {
  user: currentUser ? currentUser.userData : {},
  err: {},
  isAuthenticated: !!currentUser,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER:
    case SIGNIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case SIGNIN_USER_FAILED:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
