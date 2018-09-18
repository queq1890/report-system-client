import {
  FETCH_GITHUB_USER,
  FETCH_GITHUB_USER_SUCCESS,
  FETCH_GITHUB_USER_FAILED,
} from './constants';

export const fetchGithubUser = user => ({
  type: FETCH_GITHUB_USER,
  payload: user,
});

export const fetchUserSuccess = user => ({
  type: FETCH_GITHUB_USER_SUCCESS,
  receivedUser: user,
});

export const fetchUserFail = err => ({
  type: FETCH_GITHUB_USER_FAILED,
  payload: err,
});
