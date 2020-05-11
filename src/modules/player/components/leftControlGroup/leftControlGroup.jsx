import './left-control-group.scss';

import React from 'react';
import PropTypes from 'prop-types';

import {
    PlaylistIcon,
    ShareIcon,
    TrackBanIcon
} from 'assets';
import {
    PlayPauseButton,
    PrevTrackButton,
    NextTrackButton
} from '../controlButtons';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io'
import { CurrentTrackPanel } from '../currentTrackPanel';

export const LeftControlGroup = ({ audio }) => {
    return <div className="left-control-group">
        <div className="player-controll-buttons">
            <PrevTrackButton />
            <PlayPauseButton audio={audio} />
            <NextTrackButton />
            <PlaylistIcon classname="player-button player-playlist-button" />
        </div>
        <CurrentTrackPanel />
        {/* <div className="social-buttons">
            <FaRegHeart className="player-button player-like-button" />
            <IoMdAdd className="player-button player-playlist-add-button" />
            <ShareIcon classname="player-button player-share-button" />
            <TrackBanIcon classname="player-button player-track-ban-button" />
        </div> */}
    </div>;
};

LeftControlGroup.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    audio: PropTypes.object.isRequired
};
