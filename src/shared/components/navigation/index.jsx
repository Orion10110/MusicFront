import React from "react";
import PropTypes from "prop-types";
import "./navigation.scss";
import { NavLink } from "react-router-dom";

export const Navigation = (props) => {
  const { content } = props;
  const renderNavLinks = () => {
    return content.map((item, index) => {
      return (
        <NavLink
          key={index.toString()}
          to={`${item.link}`}
          activeClassName="current"
          className="navigation__content"
        >
          {item.title}
        </NavLink>
      );
    });
  };
  return <nav className="navigation__links-area navigation__area">{renderNavLinks()}</nav>;
};

Navigation.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired
};

