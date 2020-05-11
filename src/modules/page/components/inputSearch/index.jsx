import React from 'react';
import "./search-input.scss";
import PropTypes from "prop-types";

export const SearchInput = (props) => {
  const { className, placeholder } = props;
  return (
    <div className={`${className}`}>
      <input className="search__input" placeholder={placeholder}/>
    </div>
  );
};
SearchInput.propTypes = {
  className:PropTypes.string.isRequired,
  placeholder:PropTypes.string.isRequired
};
