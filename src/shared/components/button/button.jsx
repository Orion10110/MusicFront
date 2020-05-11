import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { withRouter } from 'react-router';

const mapBtnClasses = {
  primary: 'button_primary',
  secondary: 'button_secondary',
  round: 'button_round',
  roundBase: 'button_round button_round_base',
  roundTransparent: 'button_round button_round_transparent',
  buttonPlaylist: 'button__playlist',
  buttonNewPlaylist: 'button__new-playlist',
  play: 'button__play',
  sliderBtnLeft: 'button__slider-left',
  sliderBtnRight: 'button__slider-right'
};

const Button = ({ buttonStyle, children, isMain, onClick, history, to }) => {

  const defaultOnClick = () => {
    onClick();
    if (to) {
      history.push(to);
    }
  };

  return (
    <button
      onClick={defaultOnClick}
      className={`button ${isMain ? 'button_main' : ''} ${mapBtnClasses[buttonStyle]}`}
    > {children} </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonStyle: PropTypes.string,
  isMain: PropTypes.bool,
  onClick: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  to: PropTypes.string,
};

Button.defaultProps = {
  buttonStyle: 'primary',
  isMain: true,
  to: null,
  onClick: () => {
  }
};

export default withRouter(Button);
