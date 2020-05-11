const setCurrentTrackAction = trackInfo => ({
  type: 'SET_CURRENT_TRACK',
  payload: {
    ...trackInfo
  }
});

const addToTracklistAction = trackInfo => ({
  type: 'ADD_TO_TRACKLIST',
  payload: {
    ...trackInfo
  }
});

const setTracklistAction = trackList => ({
  type: 'SET_CURRENT_PLAYLIST',
  payload: [
    ...trackList
  ]
});

export { setCurrentTrackAction, addToTracklistAction, setTracklistAction };
