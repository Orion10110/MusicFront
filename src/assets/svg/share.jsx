import React from 'react';
import PropTypes from 'prop-types';

export const ShareIcon = ({ classname }) => <svg className={classname} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" opacity=".2" />
        <path fill="#656565" d="M11 4.875L8 7.5l-1-1 5-5 5 5-1 1-3-2.625V13h-2V4.875zM20 18v2H4V10h2v8h12v-8h2v8z" />
    </g>
</svg>;

ShareIcon.propTypes = {
    classname: PropTypes.string
};

ShareIcon.defaultProps = {
    classname: ''
};
