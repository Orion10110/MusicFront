import { combineReducers } from 'redux';
import { reducerRegistrationData, reducerAuthorizationStatus } from 'modules/authentication';
import { reducerCurrentTrack, reducerTracklist } from 'modules/player/reducers';

export default combineReducers({
  currentUser: reducerRegistrationData,
  isAuthorized: reducerAuthorizationStatus,
  currentTrack: reducerCurrentTrack,
  trackList: reducerTracklist,
});
