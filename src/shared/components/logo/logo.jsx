import React from 'react';
import './logo.scss';
import PropTypes from 'prop-types';
import avatar from 'assets/images/user-logo.png';

export const Logo = ({ className, styleImg, imgConfig }) => {
  return (
    <div className={className}>
      <img className="logo__image"
        src={imgConfig.src}
        style={styleImg}
        alt={imgConfig.alt}
        title={imgConfig.title} />
    </div>
  );
};

Logo.propTypes = {
  styleImg: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  imgConfig: PropTypes.shape({
    alt: PropTypes.string,
    title: PropTypes.string,
    src: PropTypes.string,
  }),
  className: PropTypes.string
};

Logo.defaultProps = {
  styleImg: {
    width: 40,
    height: 40
  },
  imgConfig: {
    alt: 'user_avatar',
    src: avatar
  },
  className: 'user-logo__header'
};

