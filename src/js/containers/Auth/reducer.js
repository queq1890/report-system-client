import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILED,
} from './SigninFormContainer/constants';

const initialState = {
  user: {},
  err: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER:
    case SIGNIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
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
