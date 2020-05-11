/* eslint-disable no-param-reassign */
import './mute-unmute-button.scss';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

import { isRefExist } from 'modules/player/utils';

export function MuteUnmuteButton({ audio }) {

    const [muted, setMuted] = useState();

    function onButtonPush() {
        if (isRefExist(audio)) {
            setMuted(!muted);
            audio.current.muted = !muted;
        }
    }

    function volumeHandler(volume) {
        if (isRefExist(audio)) {
            audio.current.volume = volume.target.value / 100;
        }
    }

    return (
        <div className="volume-module">
            <div className="volume-module__slider">
                <input
                    type="range"
                    min="1"
                    max="100"
                    step="9"
                    defaultValue="100"
                    className="volume-slider"
                    onChange={(volume) => volumeHandler(volume)}
                />
            </div>
            <div onClick={() => onButtonPush()}>
                {
                    muted
                        ? <FaVolumeMute className="player-button player-volume-button" />
                        : <FaVolumeUp className="player-button player-volume-button" />

                }
            </div>
        </div>
    );
};

MuteUnmuteButton.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    audio: PropTypes.object.isRequired
};
