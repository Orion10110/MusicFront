import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { submitAction } from '../actions/index';

import { connect } from 'react-redux';
import { getRefreshToken, getToken } from '../services/jwt';
import { authentificationApi } from 'modules/authentication/services';
import { setStatus } from 'modules/authentication/actions';

class Auth extends Component {
  state = {
    checked: false
  };

  componentDidMount = async () => {
    const { submitUser, setIsAuthorisedDispath } = this.props;
    const refreshToken = getRefreshToken();
    if (getToken()) {
      submitUser((await authentificationApi.getUser()).user);
      setIsAuthorisedDispath(true);

    } else if (refreshToken) {

      await authentificationApi.refreshToken(refreshToken);
      submitUser((await authentificationApi.getUser()).user);
      setIsAuthorisedDispath(true);
    }

    this.setState({ checked: true });
  }

  render() {
    const { children } = this.props;
    const { checked } = this.state;

    return checked ? <>{children}</> : <></>;
  }
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
  submitUser: PropTypes.func.isRequired,
  setIsAuthorisedDispath: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  submitUser: userInfo => dispatch(submitAction(userInfo)),
  setIsAuthorisedDispath: status => dispatch(setStatus(status))
});

export default connect(null, mapDispatchToProps)(Auth);
