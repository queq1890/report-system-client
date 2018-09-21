import {
  put, call, fork, all, takeLatest,
} from 'redux-saga/effects';
import { signinUserAPI } from './requests';
import { SIGNIN_USER } from './constants';
import { signinUserSuccess, signinUserFailed } from './actions';

function* postSigninUser(payload) {
  try {
    const params = payload.payload;
    const response = yield call(signinUserAPI, params);

    // define auth related constants from response headers
    const { 'access-token': accessToken, client, uid } = response.headers;
    const authData = {
      accessToken,
      client,
      uid,
    };

    // define user information from reponse data
    const { data: userData } = response.data;
    const currentUser = {
      authData,
      userData,
    };

    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    yield put(signinUserSuccess(userData));
  } catch (e) {
    yield put(signinUserFailed(e));
  }
}

function* watchSigninUser() {
  yield takeLatest(SIGNIN_USER, postSigninUser);
}

export default function* signinSaga() {
  yield all([fork(watchSigninUser)]);
}
