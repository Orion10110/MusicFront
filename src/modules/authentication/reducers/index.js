// reducer для currentUser
export const reducerRegistrationData = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...action.user
            };
        case 'EDIT_INFO':
            return {
                ...state, ...action.user
            };
        default:
            return state;
    }
};

// reducer для isAuthorized
export const reducerAuthorizationStatus = (state = false, action) => {
    switch (action.type) {
        case 'USER_AUTHORIZATION':
            return action.isAuthorized;
        default:
            return state;
    }
};
