import React from 'react';
import PropTypes from 'prop-types';

export const PrevIcon = ({ classname }) => <svg className={classname} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
  <g fill="none" fillRule="evenodd">
    <rect width="28" height="28" />
    <path fill="#656565" d="M3,7 L13,14 L3,21 L3,7 Z M23,7 L25,7 L25,21 L23,21 L23,7 Z M13,7 L23,14 L13,21 L13,7 Z" transform="matrix(-1 0 0 1 28 0)" />
  </g>
</svg>;

PrevIcon.propTypes = {
  classname: PropTypes.string
};

PrevIcon.defaultProps = {
  classname: ''
};
