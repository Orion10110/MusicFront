import './next-track-button.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setCurrentTrackAction } from 'modules/player/actions';
import { getNextId, getSongData } from 'modules/player/utils';
import { MdSkipNext } from 'react-icons/md';

function NextTrackButton({ currentTrack: { trackId, paused }, trackList, playerToggleRedux }) {
    return (
        <MdSkipNext
            className="player-button player-next-button"
            onClick={() => playerToggleRedux(getSongData({
                trackId: getNextId(trackId, trackList),
                paused
            }))}
        />
    );
};

NextTrackButton.propTypes = {
    currentTrack: PropTypes.shape({
        trackId: PropTypes.number.isRequired,
        paused: PropTypes.bool.isRequired,
    }).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    trackList: PropTypes.array.isRequired,
    playerToggleRedux: PropTypes.func.isRequired
};

const mapStateToProps = ({ currentTrack, trackList }) => ({ currentTrack, trackList });

const mapDispatchToProps = dispatch => ({
    playerToggleRedux: trackInfo => dispatch(setCurrentTrackAction(trackInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(NextTrackButton);
