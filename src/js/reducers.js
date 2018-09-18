import formReducer from 'containers/FormContainer/reducer';
import localeReducer from 'containers/AppContainer/reducer';
import githubReducer from 'containers/GithubUserContainer/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formReducer,
  localeReducer,
  githubReducer,
});
// rootReducer will be combined reducer if I implement more reducers

export default rootReducer;
