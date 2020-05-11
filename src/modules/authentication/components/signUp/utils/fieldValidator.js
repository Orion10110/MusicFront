const getFirstnameInputErrorText = (firstname) => {
       if (firstname.length === 0) {
        return 'Введите имя';
    } if (firstname.length > 100) {
        return 'Имя должно состоять из не более чем ста символов';
    }
    if (!firstname.match(new RegExp('^[A-Za-zА-Яа-я]+$'))) {
        return 'Имя должно состоять из букв латиницы или кириллицы';
    }
    return '';
};

const getSecondnameInputErrorText = (secondname) => {
    if (secondname.length === 0) {
        return 'Введите фамилию';
    }
    if (secondname.length > 100) {
        return 'Фамилия должна состоять из не более чем ста символов';
    }
    if (!secondname.match(new RegExp('^[A-Za-zА-Яа-я]+$'))) {
        return 'Фамилия должна состоять из букв латиницы или кириллицы';
    }
    return '';
};

const getUsernameInputErrorText = (username) => {
    if (username.length === 0) {
        return 'Введите логин';
    }
    if (username.length < 6) {
        return 'Логин должен состоять из не менее чем 6 символов';
    }
    if (username.length > 20) {
        return 'Логин должен состоять из не более чем 20 символов';
    }
    if (!username.match(new RegExp(/^\w+$/))) {
        return 'Логин может состоять только из букв латиницы, цифр и знака подчеркивания';
    }
    return '';
};

const getPasswordInputErrorText = (password) => {
    if (password.length === 0) {
        return 'Введите пароль';
    }
    if (password.length < 8 || password.length > 64) {
        return 'Пароль должен состоять из 8-64 символов';
    }
    if (!password.match(new RegExp(/^\w+$/))) {
        return 'Пароль может состоять только из букв латиницы, цифр и знака подчеркивания';
    }
    return '';
};

const getPasswordRepeatErrorText = (password, repeatedPassword) => {
    if ((repeatedPassword === ' ' || repeatedPassword.length === 0) || !password.match(new RegExp('^[A-Za-z0-9]{8,64}$'))) {
        return 'Повторите корректно введённый пароль';
    }
    if ((repeatedPassword !== password) && (password.length !== 0)) {
        return 'Введенные пароли не совпадают';
    }
    return '';
};

const additionalCheck = (errorLog, currentState) => {
    return errorLog.map((e, i) => {
        const key = Object.keys(e);
        return {
            [key]: (currentState[i] === '&;') ? '' : e[key]
        };
    });
};

export const validateFields = (currentState, isSubmit) => {
    const {
        firstname,
        secondname,
        username,
        password,
        repeatedPassword
    } = currentState;

    let errorLog = [];

    errorLog.push({ firstnameErrorText: getFirstnameInputErrorText(firstname, isSubmit) });
    errorLog.push({ secondnameErrorText: getSecondnameInputErrorText(secondname, isSubmit) });
    errorLog.push({ usernameErrorText: getUsernameInputErrorText(username, isSubmit) });
    errorLog.push({ passwordInputErrorText: getPasswordInputErrorText(password, isSubmit) });
    errorLog.push({ passwordRepeatErrorText: getPasswordRepeatErrorText(password, repeatedPassword, isSubmit) });

    if (!isSubmit) {
        errorLog = additionalCheck(errorLog, [firstname, secondname, username, password, repeatedPassword]);
    }

    return errorLog.reduce((acc, err) => ({ ...acc, ...err }));
};
