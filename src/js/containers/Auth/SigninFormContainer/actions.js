import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILED,
} from './constants';

export const signinUser = payload => ({
  type: SIGNIN_USER,
  payload,
});

export const signinUserSuccess = user => ({
  type: SIGNIN_USER_SUCCESS,
  payload: user,
});

export const signinUserFailed = err => ({
  type: SIGNIN_USER_FAILED,
  payload: err,
});
