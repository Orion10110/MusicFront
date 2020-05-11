import './prev-track-button.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setCurrentTrackAction } from 'modules/player/actions';
import { getPrevId, getSongData } from 'modules/player/utils';
import { MdSkipPrevious } from 'react-icons/md';

function PrevTrackButton({ currentTrack: { trackId, paused }, trackList, playerToggleRedux }) {
    return (
        <MdSkipPrevious
            className="player-button player-prev-button"
            onClick={() => playerToggleRedux(getSongData({
                trackId: getPrevId(trackId, trackList),
                paused
            }))}
        />
    );
};

PrevTrackButton.propTypes = {
    currentTrack: PropTypes.shape({
        trackId: PropTypes.number,
        paused: PropTypes.bool,
        id: PropTypes.number
    }).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    trackList: PropTypes.array.isRequired,
    playerToggleRedux: PropTypes.func.isRequired
};

const mapStateToProps = ({ currentTrack, trackList }) => ({ currentTrack, trackList });

const mapDispatchToProps = dispatch => ({
    playerToggleRedux: trackInfo => dispatch(setCurrentTrackAction(trackInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(PrevTrackButton);
