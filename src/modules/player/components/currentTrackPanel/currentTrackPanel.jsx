import './current-track-panel.scss';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CurrentTrackPanel = ({ trackInfo, trackList }) => {
    const {
        albumImgUrl: imageUrl,
        trackName,
        authorName
    } = trackList[trackInfo.trackId];

    return (<div className="current-track-panel">
        <img className="album-image" src={imageUrl} alt="No IMG" />
        <div className="track-info">
            <div className="track-name">{trackName}</div>
            <div className="track-author">{authorName}</div>
        </div>
    </div>);
};

CurrentTrackPanel.propTypes = {
    trackInfo: PropTypes.shape({
        trackId: PropTypes.number,
        paused: PropTypes.bool
    }).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    trackList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({ trackInfo: state.currentTrack, trackList: state.trackList });

export default connect(mapStateToProps)(CurrentTrackPanel);
