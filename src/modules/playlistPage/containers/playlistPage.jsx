import './playlist-page.scss';

import React, { useEffect, useState } from 'react';
import { useRouteMatch, withRouter } from 'react-router';

import { playlistService } from 'shared/components/playlist/services/apiService.playlist';
import { playlistUpdateApi } from 'shared/components/playlistHead/services/apiService.playlistUpdate';
import { Button, CONTENT_TYPE_NAME, PlaylistHead } from 'shared/components';
import { setCurrentTrackAction, setTracklistAction } from 'modules/player/actions';
import { TrackSearchTab, TrackLoadTabModal } from 'modules/playlistPage/components';

import { SettingsIcon } from 'assets/svg/settingsIcon';
import { MdPlayArrow } from 'react-icons/md';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PlaylistPage = (props) => {
  const [playlist, setPlaylist] = useState({ songs: [] });
  const { setTrack, setList, history } = props;
  const match = useRouteMatch({ path: '/users/playlists/:id' });

  const updatePlaylistInfo = () => playlistService.getPlaylistById(match.params.id)
    .then(response => setPlaylist(response));

  useEffect(() => {
    updatePlaylistInfo();
  }, []);

  const currentTrackInfo = (trackId, paused) => {
    return {
      trackId,
      paused
    };
  };

  const { songs, title, image, id } = playlist;
  return (
    <div className="playlist-page">
      <PlaylistHead title={title} type={CONTENT_TYPE_NAME.playlist} imagePath={image} playlistId={id}>
        <Button
          isMain={false}
          buttonStyle="roundBase"
          onClick={() => {
            setList(songs);
            setTrack(currentTrackInfo(0, false));
          }}
        >
          <MdPlayArrow className="icon-size" /> Слушать
        </Button>
        <div className="playlist-controls__right">
          <TrackLoadTabModal playlistId={id} updateData={updatePlaylistInfo} />
          <Button
            isMain={false}
            buttonStyle="roundTransparent"
            onClick={async () => {
              await playlistUpdateApi.delete(id);
              history.push("/users/playlists");
            }}
          >
            <SettingsIcon /> Удалить плейлист
        </Button></div>
      </PlaylistHead>
      <TrackSearchTab playlistId={id} songs={songs} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setTrack: trackInfo => dispatch(setCurrentTrackAction(trackInfo)),
  setList: listInfo => dispatch(setTracklistAction(listInfo))
});

const mapStateToProps = state => ({
  currentTrack: state.currentTrack
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlaylistPage));

PlaylistPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  currentTrack: PropTypes.shape({
    trackId: PropTypes.number,
    paused: PropTypes.bool
  }).isRequired,
  setTrack: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired
};
