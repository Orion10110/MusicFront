import './list.scss';
import React from 'react';
import PropTypes from 'prop-types';

export const List = (props) => {
  const { children, listName, listType } = props;

  return (
    <div className="list">
      <div className="list__title">{listName}</div>
      <div className={listType}>
        {children}
      </div>
    </div>);
};

List.propTypes = {
  children: PropTypes.node,
  listName: PropTypes.string,
  listType: PropTypes.string.isRequired
};

List.defaultProps = {
  listName: null,
  children: null
};
