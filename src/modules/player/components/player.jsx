/* eslint-disable jsx-a11y/media-has-caption */
import './player.scss';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ProgressBar } from './progressBar/progressBar';
import { LeftControlGroup } from './leftControlGroup/leftControlGroup';
import { RightControlGroup } from './rightControlGroup/rightControlGroup';
import { setCurrentTrackAction } from 'modules/player/actions';
import { getNextId } from 'modules/player/utils';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
    }

    onEndedHandler() {
        const { trackInfo, trackInfo: { trackId }, trackList, playerToggleRedux } = this.props;
        playerToggleRedux({ trackId: getNextId(trackId, trackList) });
    }

    render() {
        const { trackInfo, trackList } = this.props;
        return trackList.length ? (<div className="player-bar">
            <ProgressBar audio={this.audioRef} />
            <div className="content-bar">
                <LeftControlGroup audio={this.audioRef} />
                <RightControlGroup audio={this.audioRef} />
                <audio
                    onEnded={() => this.onEndedHandler()}
                    src={trackList[trackInfo.trackId].trackUrl}
                    className="audio-component"
                    ref={this.audioRef}
                />
            </div>
        </div>) : <div />;
    };
}

Player.propTypes = {
    trackInfo: PropTypes.shape({
        trackId: PropTypes.number,
        paused: PropTypes.bool
    }).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    trackList: PropTypes.array.isRequired,
    playerToggleRedux: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ trackInfo: state.currentTrack, trackList: state.trackList });

const mapDispatchToProps = dispatch => ({
    playerToggleRedux: trackInfo => dispatch(setCurrentTrackAction(trackInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
