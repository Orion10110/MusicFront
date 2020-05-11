import './track-search-tab.scss';

import React, { useState, useEffect } from 'react';

import { TrackList } from 'modules/userPage';
import { AnimatedInput } from 'shared/components';
import { tracks } from 'shared/components/track/services/apiService.tracks';

import PropTypes from 'prop-types';

export default function TrackSearchTab({ songs, playlistId }) {
    const [inputData, setInputData] = useState('');
    const [allSongsList, setAllSongsList] = useState([]);

    async function getAllSongList() {
        await tracks.getTracks()
            .then(data => { setAllSongsList(data); });
    }

    useEffect(() => {
        getAllSongList();
    }, []);

    const inputHandler = (e) => {
        e.preventDefault();
        const { value } = e.currentTarget;
        setInputData(value);
    };

    const isInputEmpty = () => inputData !== '';

    const songsFilter = arr => arr.filter(({ trackName, authorName }) => {
        const dataFromInput = inputData.toLowerCase();
        return trackName.toLowerCase().includes(dataFromInput) || authorName.toLowerCase().includes(dataFromInput);
    });

    return (
        <div className="playlist-page">
            <div className="song-upload-tab">
              <div className="song-search-tab__container">
                <AnimatedInput
                    className="song-search-tab__input "
                    type="string"
                    placeholder="Введите имя трека/исполнителя для поиска"
                    idName="searchField"
                    onChange={(e) => { inputHandler(e); }}
                    />
              </div>
                {
                    isInputEmpty() && songsFilter(songs).length === 0
                        ? <div />
                        : <TrackList
                            songs={songsFilter(songs)}
                            playlistId={playlistId}
                        />
                }
                {
                    isInputEmpty() ?
                        <TrackList
                            songs={songsFilter(allSongsList)}
                            playlistId={playlistId}
                            isSearchResult />
                        : <div />
                }
            </div>
        </div>
    );
};

TrackSearchTab.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        trackName: PropTypes.string,
        authorName: PropTypes.string
    })).isRequired,
    playlistId: PropTypes.number
};

TrackSearchTab.defaultProps = {
    playlistId: 0
};
