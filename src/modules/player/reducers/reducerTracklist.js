const initialState = [
    {
        id: 8679028575683929575893,
        trackId: 0,
        trackName: 'Песня о нас',
        authorName: 'Нежность на бумаге',
        albumImgUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a1/33/55/a13355da-7db5-435f-dbd0-b4e682a9a4fb/source/512x512bb.jpg',
        trackUrl: 'https://dl1.mp3party.net/download/8949149'
    }
];

export const reducerTracklist = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PLAYLIST':
            return [
                ...action.payload
            ];
        case 'ADD_TO_TRACKLIST': {
            // eslint-disable-next-line no-param-reassign
            let isUniq = true;
            state.forEach(element => {
                if (element.uniqueId === action.payload.uniqueId) {
                    isUniq = false;
                }
            });
            return isUniq ? [...state, action.payload] : state;
        }
        default:
            return state;
    }
};
