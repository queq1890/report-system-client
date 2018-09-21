import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from 'components/Home';

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  user: state.authReducer.user,
});

const HomeContainer = withRouter(connect(
  mapStateToProps,
  null
)(Home));

export default HomeContainer;
