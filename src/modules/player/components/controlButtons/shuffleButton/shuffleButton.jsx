import './shuffle-button.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { IoMdShuffle } from 'react-icons/io';
import { setCurrentTrackAction, setTracklistAction } from 'modules/player/actions';
import { shuffle } from 'modules/player/utils';

function ShuffleButton({ trackList, playerToggleRedux, tracklistSetRedux }) {
    function onButtonPush() {
        playerToggleRedux({ trackInfo: { trackId: 0, paused: true } });
        tracklistSetRedux(shuffle(trackList));
    }

    return (
        <IoMdShuffle
            className="player-button player-shuffle-button"
            onClick={() => onButtonPush()}
        />
    );
};

ShuffleButton.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    trackList: PropTypes.array.isRequired,
    playerToggleRedux: PropTypes.func.isRequired,
    tracklistSetRedux: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ trackList: state.trackList });

const mapDispatchToProps = dispatch => ({
    playerToggleRedux: trackInfo => dispatch(setCurrentTrackAction(trackInfo)),
    tracklistSetRedux: trackList => dispatch(setTracklistAction(trackList))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShuffleButton);
