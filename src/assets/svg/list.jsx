import React from 'react';
import PropTypes from 'prop-types';

export const PlaylistIcon = ({ classname }) => <svg className={classname} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
    <g>
        <rect fill="none" x="0" y="0" width="24" height="24" />
        <path fill="#656565" d="M7.714,16.286l12,0l0,1.714l-12,0l0,-1.714Zm-3.428,0l1.714,0l0,1.714l-1.714,0l0,-1.714Zm4.285,-5.143l11.143,0l0,1.714l-11.143,0l0,-1.714Zm-0.857,-5.143l12,0l0,1.714l-12,0l0,-1.714Zm-3.428,0l1.714,0l0,1.714l-1.714,0l0,-1.714Zm0,4.286l2.571,1.714l-2.571,1.714l0,-3.428Z" />
    </g>
</svg>;

PlaylistIcon.propTypes = {
    classname: PropTypes.string
};

PlaylistIcon.defaultProps = {
    classname: ''
};
