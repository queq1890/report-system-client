import { all } from 'redux-saga/effects';
import githubSaga from 'containers/GithubUserContainer/sagas';
import signinSaga from 'containers/Auth/SigninFormContainer/sagas';

export default function* rootSaga() {
  yield all([githubSaga(), signinSaga()]);
}
