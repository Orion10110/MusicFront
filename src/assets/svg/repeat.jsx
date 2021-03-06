import React from 'react';
import PropTypes from 'prop-types';

export const RepeatIcon = ({ classname }) => <svg className={classname} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
  <g fill="none" fillRule="evenodd">
    <rect width="28" height="28" />
    <path fill="#656565" fillRule="nonzero" d="M9,21 L9,23 L5,20 L9,17 L9,19 L17,19 C19.5,19 21,16.5 21,14 L23,14 C23,17.731221 20.7350416,21 17,21 L9,21 Z M19,8 L19,6 L23,9 L19,12 L19,10 L12,10 C9.09373756,10 7,12.0968545 7,15 L5,15 C5,10.7636809 8.26495843,8 12,8 L19,8 Z" />
  </g>
</svg>;

RepeatIcon.propTypes = {
  classname: PropTypes.string
};

RepeatIcon.defaultProps = {
  classname: ''
};
