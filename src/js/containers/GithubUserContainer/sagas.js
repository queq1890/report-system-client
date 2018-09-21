import {
  put, call, fork, all, takeLatest,
} from 'redux-saga/effects';
import { getUserAPI } from './requests';
import { FETCH_GITHUB_USER } from './constants';
import { fetchUserSuccess, fetchUserFail } from './actions';

function* getGithubUser() {
  try {
    const response = yield call(getUserAPI);
    const profile = response.data;
    yield put(fetchUserSuccess(profile));
  } catch (e) {
    yield put(fetchUserFail(e));
  }
}

function* watchGithubUser() {
  yield takeLatest(FETCH_GITHUB_USER, getGithubUser);
}

export default function* githubSaga() {
  yield all([fork(watchGithubUser)]);
}
