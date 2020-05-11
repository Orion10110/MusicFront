import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Switch, withRouter } from 'react-router';

import { MdPlayArrow } from 'react-icons/md';
import userLogo from 'assets/images/user-logo.png';
import { SettingsIcon } from 'assets/svg/settingsIcon';

import { address } from 'addresses/path';
import { UserRoutes } from 'modules/userPage';
import { Navigation, GeneralHead, Button } from 'shared';

const NAVIGATION_TAB_ITEMS = [
  {
    link: address.tracks,
    title: 'Треки',
  },
  {
    link: address.playlists,
    title: 'Плейлисты',
  }
];

function UserPage({ currentUser: { firstname, secondname }, history }) {
  if (!firstname || !secondname) {
    history.push(address.main);
  }

  return (
    <main className="container">
      <GeneralHead title={`${firstname} ${secondname}`} type="Моя музыка" imagePath={userLogo}>
        <Button
          isMain={false}
          buttonStyle="roundBase"
        ><MdPlayArrow className="icon-size" /> Вперемешку</Button>
        <Button
          to={address.settings}
          isMain={false}
          buttonStyle="roundTransparent"
        ><SettingsIcon /> Настройки</Button>
      </GeneralHead>
      <Navigation content={NAVIGATION_TAB_ITEMS} />
      <Switch><UserRoutes /></Switch>
    </main>
  );
}

UserPage.propTypes = {
  currentUser: PropTypes.shape({
    firstname: PropTypes.string,
    secondname: PropTypes.string
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default withRouter(connect(mapStateToProps)(UserPage));
