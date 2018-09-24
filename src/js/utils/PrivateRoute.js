import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/sign_in',
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(PrivateRoute)
);
