import './input.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const AnimatedInput = ({ type, idName, onChange, placeholder, defaultValue }) =>
    <div className="authorization-input-block">
        <input
            type={type}
            id={idName}
            className="authorization-input"
            onChange={onChange}
            placeholder="&nbsp;"
            defaultValue={defaultValue}
        />
        <label className="authorization-input-lable-block" htmlFor={idName}>
            <span className="authorization-input-label">{placeholder}</span>
        </label>
    </div>;

AnimatedInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    idName: PropTypes.string.isRequired,
    defaultValue: PropTypes.string
};

AnimatedInput.defaultProps = {
    type: 'string',
    defaultValue: ''
};
