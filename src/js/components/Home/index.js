import React, { PureComponent } from 'react';
import SigninFormContainer from 'containers/Auth/SigninFormContainer';

class Home extends PureComponent {
  render() {
    // isAuthenticated is temporary mocked
    // will use redux-saga & reducer to set proper value
    const { isAuthenticated, user } = this.props;
    console.log(user);
    return !isAuthenticated ? (
      <div>
        <SigninFormContainer />
      </div>
    ) : (
      <div>
        <p>signed_in</p>
      </div>
    );
  }
}

export default Home;
