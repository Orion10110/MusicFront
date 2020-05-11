import './playlist-head.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { playlistUpdateApi } from 'shared/components/playlistHead/services/apiService.playlistUpdate';
import { ImageUpload } from 'shared/components/playlistHead/components/imageLoader/imageLoader';

export const PlaylistHead = (props) => {
  const { title, type, imagePath, children, playlistId } = props;

  return (
    <div className="generalHead">
      <ImageUpload title={title} type={type} imagePath={imagePath} playlistId={playlistId} />
      <div className="generalHead__main-block">
        <div className="generalHead__info">
          <span className="generalHead__type">{type}</span>
          <input
            defaultValue={title}
            className="generalHead__title"
            onChange={
              (e) => {
                playlistUpdateApi.titleUpdate({ id: playlistId, title: e.target.value });
              }
            } />
        </div>
        <div className="generalHead__buttons">
          {children}
        </div>
      </div>
    </div>
  );
};

PlaylistHead.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  imagePath: PropTypes.string,
  children: PropTypes.node.isRequired,
  playlistId: PropTypes.number
};

PlaylistHead.defaultProps = {
  title: null,
  type: null,
  imagePath: null,
  playlistId: null
};
