const submitAction = registrationInfo => ({
    type: 'LOG_IN',
    user: {
        ...registrationInfo
    }
});

const setStatus = isAuthorized => ({
    type: 'USER_AUTHORIZATION',
    isAuthorized
});

export { submitAction, setStatus };
