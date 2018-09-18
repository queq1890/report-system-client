import { connect } from 'react-redux';
import GithubUser from 'components/GithubUser';
import { fetchGithubUser } from './actions';

const mapStateToProps = state => ({
  profile: state.githubReducer.profile,
  err: state.githubReducer.err,
  loading: state.githubReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchGithubUser: () => dispatch(fetchGithubUser()),
});

const GithubUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubUser);

export default GithubUserContainer;
