import './input.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const AnimatedInputDropDown = ({ type, idName, onChange, placeholder, defaultValue, dataList }) =>
    <div className="authorization-input-block">
        <input
            type={type}
            id={idName}
            className="authorization-input"
            onChange={onChange}
            placeholder="&nbsp;"
            defaultValue={defaultValue}
            list="data"
        />
        <label className="authorization-input-lable-block" htmlFor={idName}>
            <span className="authorization-input-label">{placeholder}</span>
        </label>
        <datalist id="data">{
                dataList.map((data, index) => (
                    <option key={index.toString()} value={data} />
                ))}
        </datalist>
    </div>;

AnimatedInputDropDown.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    idName: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    dataList: PropTypes.arrayOf(PropTypes.string)
};

AnimatedInputDropDown.defaultProps = {
    type: 'string',
    defaultValue: '',
    dataList: []
};
