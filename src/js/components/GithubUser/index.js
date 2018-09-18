import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { Loader } from 'semantic-ui-react';
import { Img, Btn } from './style';

class GithubUser extends PureComponent {
  getProfile = () => {
    const { fetchGithubUser } = this.props;
    fetchGithubUser();
  };

  render() {
    const { profile, err, loading } = this.props;

    if (!isEmpty(err)) {
      return (
        <div>
          {err.response.status}
          {err.response.statusText}
        </div>
      );
    }

    return loading ? (
      <Loader active inline />
    ) : (
      <div>
        {!isEmpty(profile) && (
          <Img src={profile.avatar_url} alt="github icon" />
        )}
        <Btn type="submit" onClick={this.getProfile}>
          get profile
        </Btn>
      </div>
    );
  }
}

GithubUser.propTypes = {
  fetchGithubUser: PropTypes.func,
  profile: PropTypes.shape({ avatar_url: PropTypes.string }),
  err: PropTypes.shape({
    response: PropTypes.shape({
      status: PropTypes.number,
      statusText: PropTypes.string,
    }),
  }),
  loading: PropTypes.bool,
};

export default GithubUser;
