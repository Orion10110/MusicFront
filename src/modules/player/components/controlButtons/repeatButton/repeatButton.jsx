import './repeat-button.scss';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdRepeat } from 'react-icons/md';
import { isRefExist } from 'modules/player/utils';

export function RepeatButton({ audio }) {

    const [repeat, setRepeat] = useState();

    function onButtonPush() {
        if (isRefExist(audio)) {
            // eslint-disable-next-line no-param-reassign
            audio.current.loop = repeat;
            setRepeat(!repeat);
        }
    }

    return (
        <div onClick={() => onButtonPush(repeat)}>
            {
                repeat
                    ? <MdRepeat className="player-button player-loop-button player-loop-button_off" />
                    : <MdRepeat className="player-button player-loop-button player-loop-button_on" />
            }
        </div>
    );
}

RepeatButton.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    audio: PropTypes.object.isRequired
};
