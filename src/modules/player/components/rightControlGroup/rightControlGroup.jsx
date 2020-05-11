import './right-control-group.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { MuteUnmuteButton, RepeatButton, ShuffleButton } from '../controlButtons';

export const RightControlGroup = ({ audio }) => {
    return <div className="right-control-group">
        <ShuffleButton />
        <RepeatButton audio={audio} />
        <MuteUnmuteButton audio={audio} />
    </div>;
};

RightControlGroup.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    audio: PropTypes.object.isRequired
};
