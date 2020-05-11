import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

export const CenterBlockWrapper = ({ children }) =>
    (<div className="center-block-wrapper">{children}</div>);

CenterBlockWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
