import './sign-in.scss';

import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { submitAction, setStatus } from 'modules/authentication/actions';

import { Button, AnimatedInput } from 'shared';
import { address } from 'addresses/path';
import { authentificationApi } from 'modules/authentication/services';

class SignIn extends React.Component {
  state = {
    username: "&;",
    password: "&;",
    errorMsg: ""
  };

  inputHandler = (e) => {
    e.preventDefault();
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };

  getUser = ({ user: { firstname, secondname, username } }) => ({
    firstname,
    secondname,
    username
  });

  submitHandler = async () => {
    const { history, submitUser, onClose, setIsAuthorisedDispath } = this.props;
    const { username, password } = this.state;

    const data = await authentificationApi.login({ username, password });

    if (data && data.user.username === username) {
      submitUser(this.getUser(data));
      setIsAuthorisedDispath(true);
      onClose();
      history.push(address.playlists);
    } else {
      this.setState({ errorMsg: "Введенная комбинация логина и пароля не существует!" });
    }
  };

  render() {
    const { errorMsg } = this.state;
    return (
      <div className="sign-in-tab">
        <AnimatedInput
          className="login-tab__input"
          placeholder="Логин"
          idName="username"
          onChange={this.inputHandler}
        />
        <AnimatedInput
          className="sign-in-tab__input"
          type="password"
          placeholder="Пароль"
          idName="password"
          onChange={this.inputHandler}
        />
        <div className="sign-in-tab__error-field">
          {errorMsg}
        </div>
        <Button
          className="sign-in-tab__submit-button"
          color="primary"
          buttonType="button"
          onClick={this.submitHandler}
        >
          Войти
        </Button>
      </div>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  submitUser: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  setIsAuthorisedDispath: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  submitUser: loginInfo => dispatch(submitAction(loginInfo)),
  setIsAuthorisedDispath: status => dispatch(setStatus(status))
});

export default connect(null, mapDispatchToProps)(withRouter(SignIn));
