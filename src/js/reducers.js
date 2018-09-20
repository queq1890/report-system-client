import formReducer from 'containers/FormContainer/reducer';
import localeReducer from 'containers/AppContainer/reducer';
import githubReducer from 'containers/GithubUserContainer/reducer';
import authReducer from 'containers/Auth/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formReducer,
  localeReducer,
  githubReducer,
  authReducer,
});

export default rootReducer;
