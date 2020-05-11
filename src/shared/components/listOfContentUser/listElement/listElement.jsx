import React, { Component } from 'react';
import './list-element.scss';
import PropTypes from 'prop-types';
import { PlayIcon } from 'assets/svg/play';
import { Button } from 'shared/components';
import { NavLink } from 'react-router-dom';

export class ListElement extends Component {
  state = {
    isMouseInside: false
  };

  mouseAction = () => {
    this.setState(prevState => ({ isMouseInside: !prevState.isMouseInside }));
  };

  render() {
    const { path, name, id, to, refSlide } = this.props;
    const { isMouseInside } = this.state;
    const styleObj = { backgroundImage: `url(${path})` };
    return (
      <div onMouseEnter={this.mouseAction} onMouseLeave={this.mouseAction} ref={refSlide} className="list-element">
        <div style={styleObj} className="list-element__current list-element__hover-area">
          <div className="list-element__transparency"/>
          {
            isMouseInside && <Button isMain buttonStyle="buttonPlaylist">
              <PlayIcon className="list-element__play"/>
            </Button>
          }
        </div>
        <NavLink className="list-element__name" to={`${to}${id}`}>{name}</NavLink>
      </div>
    );
  }
}

ListElement.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  to: PropTypes.string,
  refSlide: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
};
ListElement.defaultProps = {
  path: '',
  name: '',
  id: null,
  to: null,
  refSlide: null
};
