import './user-info.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { FaRegHeart } from 'react-icons/fa';

import { Logo } from 'shared';
import { address } from 'addresses/path';
import { AuthenticationModal } from 'modules/authentication';
import { useSelector } from 'react-redux';

export const UserInfo = (props) => {
  const isAuthorized = useSelector(state => state.isAuthorized);
  const checkActive = (_, location) => {
    const { pathname } = location;
    return !!pathname.includes('/signUp');
  };

  const { className } = props;
  return (
    <div className="user-info__area">
      { isAuthorized || <AuthenticationModal/> }
      <NavLink
        to={address.tracks}
        activeClassName="user-info__active"
        isActive={checkActive}
        className={`navigation__link navigation__content ${className} `}
      >
        <FaRegHeart className="user-info__heart-icon" />
        Моя музыка
      </NavLink>
      <Logo />
    </div>
  );
};

UserInfo.propTypes = {
  className: PropTypes.string
};
UserInfo.defaultProps = {
  className: 'user-info__info'
};
