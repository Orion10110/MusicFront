import './track.scss';

import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { playlistUpdateApi } from 'shared/components/playlistHead/services/apiService.playlistUpdate';
import { setCurrentTrackAction, addToTracklistAction } from 'modules/player/actions';

import { IoIosPlay, IoMdAdd } from 'react-icons/io';
import { TiMediaPause } from 'react-icons/ti';
import { FaTrash } from 'react-icons/fa';

import { Button } from 'shared/components';
import { getSongData } from 'modules/player/utils';

const Track = props => {
  const [isMouseInside, setIsMouseInside] = useState(false);
  const {
    trackInfo, trackInfo: { uniqueId, authorName, trackName },
    setCurrentTrack,
    currentTrack: { uniqueId: currentTrackId, paused },
    setPlaylist,
    playlistId,
    addToTracklist,
    isSearchResult,
    trackId: trackNumber
  } = props;

  const setMouse = () => setIsMouseInside(!isMouseInside);

  const isThisSongPlaying = () => currentTrackId === uniqueId && !paused;

  const playTrack = () => {
    let newPauseState = false;
    setPlaylist(trackInfo);

    if (currentTrackId === uniqueId) {
      newPauseState = !paused;
    }

    setCurrentTrack(getSongData({ trackId: trackNumber, paused: newPauseState }));
  };


  return (
    <div className="track" onMouseLeave={setMouse} onMouseEnter={setMouse}>
      <div className="track__main">
        {
          isMouseInside || currentTrackId === uniqueId
            ? <div className="track__play">
              <Button isMain={false} buttonStyle="play" onClick={playTrack}>
                {
                  isThisSongPlaying()
                    ? <TiMediaPause className="play-icon" title="Остановить" />
                    : <IoIosPlay className="play-icon" title="Запустить" />
                }
              </Button>
            </div>
            : <div className="track__id">{trackNumber + 1}</div>
        }
        <div className="track__name">{trackName}</div>
      </div>
      <div className="track__properties">
        <div className="track__artist"> {authorName || ''} </div>
        <div className="track__duration">
          {isMouseInside
            ? <div className="track__controls"><Button isMain={false} buttonStyle="roundTransparent" onClick={() => {
              if (!isSearchResult) {
                addToTracklist(trackInfo);
              }
              else {
                playlistUpdateApi.addTrack({ uniqueId, playlistId });
              }
            }}>
              <IoMdAdd title={isSearchResult ? "Добавить в плейлист" : "Добавить в очередь"} />
            </Button>
              {!isSearchResult ? <Button isMain={false} buttonStyle="roundTransparent" onClick={() => {
                if (playlistId > 0) {
                  playlistUpdateApi.removeTrack({ uniqueId, playlistId });
                }
                else {
                  playlistUpdateApi.deleteTrack(uniqueId);
                }
              }}>
                <FaTrash title={(playlistId > 0) ? "Удалить трек из плейлиста" : "Удалить трек"} />
              </Button> : <div />}
            </div>
            : '00:00'
          }
        </div>
      </div>
    </div>
  );
};

Track.propTypes = {
  trackInfo: PropTypes.shape({
    uniqueId: PropTypes.number,
    index: PropTypes.number,
    trackName: PropTypes.string,
    authorName: PropTypes.string
  }),
  currentTrack: PropTypes.shape({
    trackId: PropTypes.number,
    paused: PropTypes.bool,
    id: PropTypes.number
  }).isRequired,
  setPlaylist: PropTypes.func.isRequired,
  setCurrentTrack: PropTypes.func.isRequired,
  playlistId: PropTypes.number,
  addToTracklist: PropTypes.func.isRequired,
  isSearchResult: PropTypes.bool
};

Track.defaultProps = {
  trackInfo: PropTypes.shape({
    uniqueId: '',
    index: '',
    trackName: '',
    authorName: ''
  }),
  playlistId: 0,
  isSearchResult: false
};

const mapStateToProps = state => ({
  currentTrack: {...state.currentTrack, uniqueId: state.trackList[state.currentTrack.trackId].uniqueId}
});

const mapDispatchToProps = dispatch => ({
  setCurrentTrack: (trackInfo) => dispatch(setCurrentTrackAction(trackInfo)),
  addToTracklist: (trackInfo) => dispatch(addToTracklistAction(trackInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Track);
