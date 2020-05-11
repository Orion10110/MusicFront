/* eslint-disable react/destructuring-assignment */
import './sign-up.scss';

import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { submitAction, setStatus } from 'modules/authentication/actions';

import { Button, AnimatedInput } from 'shared';
import { validateFields, submittedChecker } from './utils';
import { authentificationApi } from 'modules/authentication/services';
import { inputParams } from './const';
import { address } from 'addresses/path';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

class SignUp extends React.Component {
    state = {
        firstname: '&;',
        secondname: '&;',
        username: '&;',
        password: '&;',
        repeatedPassword: '&;',
        firstnameErrorText: ' ',
        secondnameErrorText: ' ',
        usernameErrorText: ' ',
        passwordInputErrorText: ' ',
        passwordRepeatErrorText: ' ',
        isSubmitFirstClicked: false,
        isSubmitted: false,
        showPassword: false
    };

    getUser = () => {
        const { firstname, secondname, username } = this.state;
        return { firstname, secondname, username };
    };

    // единичный случай использования async. Не пытайтесь повторить.
    inputHandler = async (e) => {
        e.preventDefault();
        const { isSubmitFirstClicked } = this.state;
        const { id, value } = e.currentTarget;
        await this.setState({ [id]: value });
        this.setState(prevState => validateFields(prevState, isSubmitFirstClicked));
    };

    passwordVisToggleHandeler = () => {
        const { showPassword } = this.state;
        this.setState({ showPassword: !showPassword });
    }

    submitHandler = async () => {
        const { history, submitUser, onClose, setAuthorizationStatus } = this.props;
        const errorObj = validateFields(this.state, true);

        if (submittedChecker(errorObj)) {

            const { password } = this.state;
            const data = await authentificationApi.registration({
                ...this.getUser(),
                password
            });

            submitUser(this.getUser());

            if (data.token) {
                setAuthorizationStatus(true);
            }

            onClose();
            history.push(address.playlists);
            return;
        }

        this.setState({
            isSubmitFirstClicked: true,
            ...errorObj
        });
    };

    render() {
        const { showPassword, passwordInputErrorText, passwordRepeatErrorText } = this.state;
        return (
            <div className='registration-tab'>
                {inputParams.map((meta, index) => (
                    <div key={index.toString()}>
                        <AnimatedInput
                            className="registration-tab__input"
                            type="string"
                            placeholder={meta.placeholder}
                            idName={meta.idName}
                            onChange={this.inputHandler}
                        />
                        <div className="registration-tab__error-field">
                            {this.state[meta.err]}
                        </div>
                    </div>
                ))}
                <div className="registration-tab__password">
                    <AnimatedInput
                        className="registration-tab__input"
                        type={showPassword ? 'string' : 'password'}
                        placeholder="Пароль"
                        idName="password"
                        onChange={this.inputHandler}
                    />
                    {showPassword ?
                        <FaRegEyeSlash
                            className="registration-tab__password_vis-toggle"
                            onClick={this.passwordVisToggleHandeler}
                        /> :
                        <FaRegEye
                            className="registration-tab__password_vis-toggle"
                            onClick={this.passwordVisToggleHandeler}
                        />
                    }
                </div>
                <div className="registration-tab__error-field">
                    {passwordInputErrorText}
                </div>
                <AnimatedInput
                    className="registration-tab__input"
                    type={showPassword ? "string" : "password"}
                    placeholder="Подтверждение пароля"
                    idName="repeatedPassword"
                    onChange={this.inputHandler}
                />
                <div className="registration-tab__error-field">
                    {passwordRepeatErrorText}
                </div>
                <Button
                    className="registration-tab__submit-button"
                    color="primary"
                    buttonType="button"
                    onClick={this.submitHandler}
                >Зарегестирироваться</Button>
            </div>
        );
    }
}

SignUp.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    submitUser: PropTypes.func.isRequired,
    onClose: PropTypes.func,
    setAuthorizationStatus: PropTypes.func.isRequired
};

SignUp.defaultProps = {
    onClose: null
};

const mapDispatchToProps = dispatch => ({
    submitUser: (registrationInfo) => dispatch(submitAction(registrationInfo)),
    setAuthorizationStatus: (status) => dispatch(setStatus(status))
});

export default connect(null, mapDispatchToProps)(withRouter(SignUp));
