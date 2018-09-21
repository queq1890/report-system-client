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
    const { 'access-token': accessToken, client, uid } = response.headers;
    // TODO : set tokens etc to localStorage
    yield put(signinUserSuccess(response));
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
