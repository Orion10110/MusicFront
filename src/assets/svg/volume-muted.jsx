import React from 'react';
import PropTypes from 'prop-types';

export const MutedIcon = ({ classname }) => <svg className={classname} xmlns="http://www.w3.org/2000/svg" height="28px" width="28px" viewBox="0 0 28 28">
  <g fill="none">
      <rect width="28" height="28" />
      <rect width="24" height="24" x="2" y="2" opacity=".2" />
      <polygon fill="#656565" points="3 17 7.057 17 15 22 15 6 7.028 11 3 11" />
      <polygon fill="#656565" points="21 15.414 23.828 18.243 25.243 16.828 22.414 14 25.243 11.172 23.828 9.757 21 12.586 18.172 9.757 16.757 11.172 19.586 14 16.757 16.828 18.172 18.243 21 15.414" />
    </g>
</svg>;

MutedIcon.propTypes = {
  classname: PropTypes.string
};

MutedIcon.defaultProps = {
  classname: ''
};
