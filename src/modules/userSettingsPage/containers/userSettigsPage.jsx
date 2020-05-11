import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { actionEditInfo } from "../actions";

import { EditUserInfo } from '../components/editUserInfo';

function UserSettigsPage(props) {
    const { currentUser, submitEdit } = props;

    return (
        <div className="user-settings">
            <h1 className="user-settings__title" style={{ color: 'white' }}>Настройки</h1>
            <EditUserInfo
                currentUser={currentUser} submitEdit={submitEdit}
            />
        </div>
    );
}

UserSettigsPage.propTypes = {
    currentUser: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
        secondname: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired,
    submitEdit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    submitEdit: userInformation => dispatch(actionEditInfo(userInformation))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettigsPage);
