import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SigninForm from 'components/Auth/SigninForm';
import { signinUser } from './actions';

const mapStateToProps = state => ({
  user: state.authReducer.user,
  err: state.authReducer.err,
});

const mapDispatchToProps = dispatch => ({
  signinUser: (payload) => dispatch(signinUser(payload)),
});

const SigninFormContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninForm));

export default SigninFormContainer;
