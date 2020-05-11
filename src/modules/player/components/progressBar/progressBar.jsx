import './progress-bar.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { isRefExist, getWidth, getSecondsToSecondAndMinutes } from 'modules/player/utils';

export class ProgressBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trackElapsed: '0:00',
            trackDuration: '0:00',
            progressBarFulfillTime: '0%'
        };
        this.progressBarFulfill = React.createRef();
        this.progressBarTopBar = React.createRef();
    }


    componentDidMount() {
        setInterval(this.setProgressTrack, 100);
        setInterval(this.setCurrentTrackTime, 1000);
    }

    setCurrentTrackTime = () => {
        const { audio, audio: { current: { currentTime, duration } } } = this.props;
        if (isRefExist(audio)) {
            this.setState({
                trackElapsed: getSecondsToSecondAndMinutes(currentTime),
                trackDuration: getSecondsToSecondAndMinutes(duration)
            });
        }
    }

    setProgressTrack = () => {
        const { audio } = this.props;
        if (isRefExist(audio)) {
            this.setState({ progressBarFulfillTime: getWidth(audio) });
        }
    }

    progressBarClickHandler = e => {
        const percentage = e.clientX / this.progressBarTopBar.current.offsetWidth;
        this.setState({ progressBarFulfillTime: `${percentage * 100}%` });

        const { audio } = this.props;
        audio.current.currentTime = audio.current.duration * percentage;
        this.setState({
            trackElapsed: getSecondsToSecondAndMinutes(audio.current.currentTime)
        });
    }

    render() {
        const { trackElapsed, trackDuration, progressBarFulfillTime } = this.state;
        return (<div className="progress-bar">
            <div className="progress-bar__background" />
            <div className="progress-bar__loading" />
            <div className="progress-bar__fulfil"
                ref={this.progressBarFulfill}
                style={{ width: progressBarFulfillTime }}
            />
            <div className="progress-bar__clock"
                ref={this.progressBarTopBar}
                onClick={this.progressBarClickHandler}
            >
                <div className="clock-left">{trackElapsed}</div>
                <div className="clock-right">{trackDuration}</div>
            </div>
        </div>);
    }
};

ProgressBar.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    audio: PropTypes.object.isRequired
};
