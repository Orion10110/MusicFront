import './play-pause-button.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FaPlay, FaPause } from 'react-icons/fa';
import { setCurrentTrackAction } from 'modules/player/actions';
import { isRefExist } from 'modules/player/utils';

function PlayPauseButton({ trackInfo, trackInfo: { paused }, playerToggleRedux, audio }) {
    function playerToggle() {
        if (!isRefExist(audio)) {
            return;
        }
        if (paused) {
            audio.current.pause();
        } else {
            audio.current.play();
        }
    }

    playerToggle();

    return (
        <div onClick={() => {
            playerToggleRedux({ ...trackInfo, paused: !paused });
        }}>
            {
                paused
                    ? <FaPlay className="player-button player-play-button" />
                    : <FaPause className="player-button player-pause-button" />
            }
        </div>
    );
}

PlayPauseButton.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    audio: PropTypes.object.isRequired,
    trackInfo: PropTypes.shape({
        trackId: PropTypes.number.isRequired,
        paused: PropTypes.bool.isRequired
    }).isRequired,
    playerToggleRedux: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ trackInfo: state.currentTrack });

const mapDispatchToProps = dispatch => ({
    playerToggleRedux: trackInfo => dispatch(setCurrentTrackAction(trackInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayPauseButton);
