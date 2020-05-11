import React from 'react';
import PropTypes from 'prop-types';

export const PlayIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 24 24">
    <path fill="#656565" d="M9,6l10,6L9,18V6z" />
</svg>;

PlayIcon.propTypes = {
  className: PropTypes.string
};

PlayIcon.defaultProps = {
  className: ''
};
