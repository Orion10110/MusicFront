import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getRandomID } from 'shared/utils';

import { CONTENT_TYPE_NAME, List, tracks, Track } from 'shared/components';
import { setTracklistAction } from 'modules/player/actions';


const TrackList = ({ dispatchListTracks, songs, isSearchResult, playlistId }) => {

  const [trackList, setTrackList] = useState([{}]);

  async function getAllTracks() {
    await tracks.getTracks()
      .then(data => {
        setTrackList(data);
      });
  }

  useEffect(() => {
    if (songs === null) {
      getAllTracks();
    }
  }, []);

  return (
    <List listName={isSearchResult ? 'Результаты поиска' : CONTENT_TYPE_NAME.tracks} listType="list__content_column">
      {(songs || trackList).map((element, index) =>
        <Track
          key={getRandomID()}
          trackInfo={element}
          setPlaylist={() => {
            dispatchListTracks(songs || trackList);
          }}
          trackId={index}
          isSearchResult={isSearchResult}
          playlistId={playlistId}
        />
      )
      }
    </List>
  );
};

TrackList.propTypes = {
  songs: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  dispatchListTracks: PropTypes.func.isRequired,
  isSearchResult: PropTypes.bool,
  playlistId: PropTypes.number
};

TrackList.defaultProps = {
  songs: null,
  isSearchResult: false,
  playlistId: 0
};

const mapDispatchToProps = dispatch => ({
  dispatchListTracks: (trackList) => dispatch(setTracklistAction(trackList))
});

export default connect(null, mapDispatchToProps)(TrackList);
