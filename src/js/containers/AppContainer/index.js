import { connect } from 'react-redux';
import App from 'components/App';
import { setLocale } from './actions';

const mapStateToProps = state => ({
  locale: state.localeReducer.locale,
});

const mapDispatchToProps = dispatch => ({
  setLocale: locale => dispatch(setLocale(locale)),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
