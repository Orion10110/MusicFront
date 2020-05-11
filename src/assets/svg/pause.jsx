import React from 'react';
import PropTypes from 'prop-types';

export const PauseIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
    <g>
        <rect fill="none" x="0" y="0" />
        <path fill="#656565" d="M5.143,3.429l5.143,0l0,17.142l-5.143,0l0,-17.142Zm8.571,0l5.143,0l0,17.142l-5.143,0l0,-17.142Z" />
    </g>
</svg>;

PauseIcon.propTypes = {
    className: PropTypes.string
};

PauseIcon.defaultProps = {
    className: ''
};
