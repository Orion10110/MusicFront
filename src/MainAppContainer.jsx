import React from 'react';

import { Header, CenterBlockWrapper, Player } from 'modules';
import { RootRoutes } from './routes';

export const MainAppComponent = () => (
  <div className="page">
    <Header />
    <CenterBlockWrapper>
        <RootRoutes/>
    </CenterBlockWrapper>
    <Player/>
  </div>
);
