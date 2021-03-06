import React from 'react';
import PropTypes from 'prop-types';

export const TrackBanIcon = ({ classname }) => <svg className={classname} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 24 24">
    <path fill="#656565" d="M19.7,5.7L19.7,5.7l-0.7-0.7c0,0,0,0,0,0l-0.7-0.7l0,0C16.6,2.8,14.4,2,12,2C6.5,2,2,6.5,2,12  c0,2.4,0.8,4.6,2.3,6.3l0,0l0.7,0.7c0,0,0,0,0,0l0.7,0.7l0,0C7.4,21.2,9.6,22,12,22c5.5,0,10-4.5,10-10C22,9.6,21.2,7.4,19.7,5.7z   M4,12c0-4.4,3.6-8,8-8c1.8,0,3.5,0.6,4.9,1.7L5.7,16.9C4.6,15.5,4,13.8,4,12z M12,20c-1.8,0-3.5-0.6-4.9-1.7L18.3,7.1  C19.4,8.5,20,10.2,20,12C20,16.4,16.4,20,12,20z" />
</svg>;

TrackBanIcon.propTypes = {
    classname: PropTypes.string
};

TrackBanIcon.defaultProps = {
    classname: ''
};
