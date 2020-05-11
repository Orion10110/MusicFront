import './generalHead.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { Logo } from 'shared';

export const GeneralHead = (props) => {
  const { title, type, imagePath, children } = props;

  const styleImg = {
    width: 200,
    height: 200
  };

  const imgConfig = {
    alt: 'user_avatar',
    title: `${title}`,
    src: `${imagePath}`
  };

  return (
    <div className="generalHead">
      <Logo className="user-logo" styleImg={styleImg} imgConfig={imgConfig} />
      <div className="generalHead__main-block">
        <div className="generalHead__info">
          <span className="generalHead__type">{type}</span>
          <h1 className="generalHead__title">{title}</h1>
        </div>
        <div className="generalHead__buttons">
          {children}
        </div>
      </div>
    </div>
  );
};

GeneralHead.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  imagePath: PropTypes.string,
  children: PropTypes.node.isRequired
};

GeneralHead.defaultProps = {
  title: null,
  type: null,
  imagePath: null
};
