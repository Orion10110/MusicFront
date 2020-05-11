import { Route, Switch } from 'react-router-dom';
import React from 'react';

import { GenresPage } from 'modules/genresPage';
import { HomePage } from 'modules/homePage';
import { UserPage } from 'modules/userPage';
import { UserSettigsPage } from 'modules/userSettingsPage';

import { address } from 'addresses/path';
import { PlaylistPage } from 'modules/playlistPage';

export const RootRoutes = () => (
  <Switch>
    <Route path={address.main} component={HomePage}/>
    <Route path={address.genres} component={GenresPage}/>
    <Route path={address.currentPlaylist} render={() => <PlaylistPage/>}/>
    <Route path={address.users} component={UserPage}/>
    <Route path={address.settings} component={UserSettigsPage}/>
  </Switch>
);
