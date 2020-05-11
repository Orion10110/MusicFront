import './homePage.scss';

import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { ListElement } from 'shared';
import { getRandomID } from 'shared/utils';
import { SliderPage } from 'shared/components';
import { playlistService } from 'shared/components/playlist/services/apiService.playlist';

export const HomePage = () => {
  const [playlistList, setPlaylistList] = useState([]);
  const isAuthorized = useSelector(state => state.isAuthorized);
  const refSlide = useRef(null);

  useEffect(() => {
    if (isAuthorized) {
      playlistService.getUserPlaylists()
        .then(response => setPlaylistList(response));
    }
  }, []);

  return (
    <main className="container">
      <h1 style={{ color: 'white' }}>Home</h1>
      {
        isAuthorized && <SliderPage arrayForSlide={playlistList} reference={refSlide}>
          {
            playlistList.map(({ image, title, id }) =>
              <ListElement
                key={getRandomID()}
                path={image}
                name={title}
                refSlide={refSlide}
                id={id}
                to="/users/playlists/"
              />
            )
          }
        </SliderPage>
      }
    </main>);
};
