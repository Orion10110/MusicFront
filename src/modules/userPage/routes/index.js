import React from 'react';
import { Route } from 'react-router-dom';

import { address } from 'addresses/path';
import { AlbumList, PlaylistList, TrackList } from 'modules/userPage';
import { CONTENT_TYPE_NAME } from 'shared/components';

export const UserRoutes = () => {
  return (
    <>
      <Route path={address.tracks} render={() => <TrackList/>}/>
      {/* <Route path={address.albums} render={() => <AlbumList/>}/> */}
      <Route path={address.playlists} render={() => <PlaylistList listName={CONTENT_TYPE_NAME.playlists} listType="list__content_row"/>}/>
    </>
  );
};
