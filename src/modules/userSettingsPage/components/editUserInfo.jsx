import React from 'react';
import { AnimatedInput, Button } from 'shared';
import PropTypes from 'prop-types';

export class EditUserInfo extends React.Component {

    state = {
        secondname: '',
        firstname: ''
    }

    inputHandler = (e) => {
        e.preventDefault();
        const { id, value } = e.currentTarget;
        this.setState({ [id]: value });
    }

    saveNewUserOptions = () => {
        const { submitEdit, currentUser } = this.props;
        const { firstname, secondname } = this.state;
        const userInformation = {
            firstname: firstname || currentUser.firstname,
            secondname: secondname || currentUser.secondname
        };
        submitEdit(userInformation);
    }

    render() {
        // данные из редакса которые мы получаем через пропсы.
        const { currentUser: { firstname, secondname } } = this.props;

        return (
            <div className="edit-user-info">
                <AnimatedInput
                    idName='firstname'
                    onChange={this.inputHandler}
                    defaultValue={firstname}
                    placeholder="введие новое имя"
                />
                <AnimatedInput
                    idName='secondname'
                    onChange={this.inputHandler}
                    defaultValue={secondname}
                    placeholder="введие новую фамилию"
                />
                <Button onClick={this.saveNewUserOptions}>Save</Button>
            </div>
        );
    }
}

EditUserInfo.propTypes = {
    /* eslint-disable  react/forbid-prop-types */
    currentUser: PropTypes.object.isRequired,
    submitEdit: PropTypes.func.isRequired
};
