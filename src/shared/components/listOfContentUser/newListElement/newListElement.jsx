import React from 'react';
import PropTypes from 'prop-types';
import './new-list-element.scss';
import { newPlaylistService } from './services/apiService.newPlaylist';
import { PlaylistAddIcon } from 'assets/svg/plus';
import { Button } from 'shared/components/button';
import { withRouter } from 'react-router';



function NewListElement({ history }) {
  function onButtonPush() {
    newPlaylistService.getNewPlaylisId()
      .then(response => {
        history.push(`playlists/${response}`);
      });
  }

  return (
    <div className="new-list-element">
      <div className="new-list-element__area">
        <Button isMain={false} buttonStyle="buttonNewPlaylist" onClick={onButtonPush}>
          <PlaylistAddIcon className="new-list-element__add" />
        </Button>
      </div>
    </div>
  );
};

NewListElement.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(NewListElement);
