import React from 'react';
import PropTypes from 'prop-types';
import { ListElement } from '../listOfContentUser';

export const Playlist = (props) => {
  const { path, name, id, to } = props;
  return <ListElement path={path} name={name} id={id} to={to}/>;
};

Playlist.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  to: PropTypes.string.isRequired
};
