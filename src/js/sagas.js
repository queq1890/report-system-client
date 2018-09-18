import { all } from 'redux-saga/effects';
import githubSaga from 'containers/GithubUserContainer/sagas';

export default function* rootSaga() {
  yield all([githubSaga()]);
}
