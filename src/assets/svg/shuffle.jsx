import React from 'react';
import PropTypes from 'prop-types';

export const ShuffleIcon = ({ classname }) => <svg className={classname} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
  <g fill="none" fillRule="evenodd">
    <rect width="28" height="28" />
    <path fill="#656565" fillRule="nonzero" d="M20,18 L20,16 L24,19 L20,22 L20,20 C17.6723243,20 16.3155219,19.4732271 14.8695595,17.740743 L16.0564387,16.021958 C17.2192129,17.3955176 18.35074,18 20,18 Z M20,8 L20,6 L24,9 L20,12 L20,10 C17.4363281,10 16.123642,11.4605967 14,15 C11.623642,18.9605967 10.2696614,20 7,20 L4,20 L4,18 L7,18 C9.5636719,18 10.876358,16.5394033 13,13 C15.376358,9.03940329 16.7303386,8 20,8 Z M12.271068,10.4311793 L11.0038834,12.049953 C9.81974656,10.6255585 8.67776541,10 7,10 L4,10 L4,8 L7,8 C9.40296584,8 10.7712356,8.56140168 12.271068,10.4311793 Z" />
  </g>
</svg>;

ShuffleIcon.propTypes = {
  classname: PropTypes.string
};

ShuffleIcon.defaultProps = {
  classname: ''
};
