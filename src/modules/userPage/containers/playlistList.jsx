import React, { useEffect, useState } from 'react';

import { playlistService } from 'shared/components/playlist/services/apiService.playlist';

import { List, NewListElement, Playlist } from 'shared/components';
import { getRandomID } from 'shared/utils';
import PropTypes from 'prop-types';

export const PlaylistList = (props) => {
  const { listName, listType } = props;
  const [playlistList, setPlaylistList] = useState([]);

  useEffect(() => {
    playlistService.getUserPlaylists()
      .then(response => setPlaylistList(response));
  }, []);

  return (
    <List listName={listName} listType={listType}>
      {
        playlistList.map(element =>
          <Playlist
            key={getRandomID()}
            id={element.id}
            path={element.image}
            name={element.title}
            to="/users/playlists/"
          />
        )
      }
      <NewListElement />
    </List>
  );
};

PlaylistList.propTypes = {
  listName: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired
};
