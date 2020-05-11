import React from 'react';
import PropTypes from 'prop-types';
import './avatar.scss';
import avatar from 'assets/images/user-logo.png';

export const Avatar = ({ src, alt, width, height, title }) => {
    return (<img src={src} alt={alt} title={title} width={width} height={height} />);
};

Avatar.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.string,
};

Avatar.defaultProps = {
    src: avatar,
    alt: 'user_avatar',
    width: 200,
    height: 200,
    title: 'Username',
};


