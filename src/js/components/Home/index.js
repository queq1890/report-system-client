import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SigninFormContainer from 'containers/Auth/SigninFormContainer';
import Mypage from 'components/Mypage';
import { BrowserRouter as Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'utils/PrivateRoute';

class Home extends PureComponent {
  render() {
    const { isAuthenticated, user } = this.props;
    console.log(user);
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SigninFormContainer} />
          <Route path="/sign_in" component={SigninFormContainer} />
          <PrivateRoute path="/mypage" component={Mypage} />
        </Switch>
      </div>
    );
  }
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.arrayOf(Object),
};

export default Home;
