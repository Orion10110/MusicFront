import './image-loader.scss';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { playlistUpdateApi } from 'shared/components/playlistHead/services/apiService.playlistUpdate';
import { getFormData } from 'shared/components/playlistHead/utils';

import { Logo } from 'shared';

export function ImageUpload({ title, imagePath, playlistId }) {

  const [imgPath, setImgPath] = useState();

  function handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      playlistUpdateApi.imgUpload(getFormData(file, playlistId));
      setImgPath(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const styleImg = {
    width: 200,
    height: 200
  };

  const imgConfig = {
    alt: 'user_avatar',
    title: `${title}`,
    src: `${imgPath !== undefined ? imgPath : imagePath}`
  };

  return (
    <div className="fileInput">
      <Logo className="user-logo" styleImg={styleImg} imgConfig={imgConfig} />
      <label htmlFor="fileInput" className="fileInput__file-button">
        <input
          id="fileInput"
          className="fileInput__input"
          type="file"
          onChange={(e) => handleImageChange(e)}
        />
        <span className="fileInput__file-button-text">Изменить обложку</span>
      </label>
    </div>
  );
}

ImageUpload.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  playlistId: PropTypes.number
};

ImageUpload.defaultProps = {
  title: null,
  imagePath: null,
  playlistId: null
};

