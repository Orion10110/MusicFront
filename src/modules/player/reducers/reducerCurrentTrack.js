const initialState = {
    trackId: 0,
    paused: true
};

export const reducerCurrentTrack = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_TRACK':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
