import React, { PureComponent } from 'react';

class Home extends PureComponent {
  render() {
    // isAuthenticated is temporary mocked
    // will use redux-saga & reducer to set proper value
    const isAuthenticated = true;
    return !isAuthenticated ? (
      <div>
        <p>not signed_in</p>
      </div>
    ) : (
      <div>
        <p>signed_in</p>
      </div>
    );
  }
}

export default Home;
