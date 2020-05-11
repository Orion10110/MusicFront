import './track-load-tab.scss';

import React, { useEffect, useState } from 'react';

import { playlistUpdateApi } from 'shared/components/playlistHead/services/apiService.playlistUpdate';
import { Button, AnimatedInput, AnimatedInputDropDown } from 'shared/components';

import PropTypes from 'prop-types';

export default function TrackLoadTab({ modalClose, playlistId, updateData }) {
    const [state, setState] = useState();
    const [dataList, setDataList] = useState();

    async function getDataList() {
        await playlistUpdateApi.getAuthorsList().then((data) => {
            setDataList(data);
        });
    }

    useEffect(() => {
        getDataList();
    }, []);

    const inputHandler = (e) => {
        e.preventDefault();
        const { id, value } = e.currentTarget;
        setState({ ...state, [id]: value });
    };

    function fileLoadHandler(e) {
        e.preventDefault();
        const { id } = e.currentTarget;
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onloadend = () => {
            setState({ ...state, [id]: file });
        };
        reader.readAsDataURL(file);
    }

    const submitHandler = () => {
        const formData = new FormData();
        formData.append('name', state.trackName);
        formData.append('image', state.trackImgFile);
        formData.append('author', state.trackAuthor);
        formData.append('file', state.trackFile);
        formData.append('playlist_id', playlistId);
        playlistUpdateApi.uploadTrack(formData)
            .then(() => updateData());
    };

    return (
        <div className="playlist-page">
            <div className="song-upload-modal">
                <AnimatedInput
                    className="song-upload-tab__input"
                    type="string"
                    placeholder="Название трека"
                    idName="trackName"
                    onChange={(e) => { inputHandler(e); }}
                />
                <AnimatedInputDropDown
                    className="song-upload-tab__input"
                    type="string"
                    placeholder="Имя автора"
                    idName="trackAuthor"
                    onChange={(e) => { inputHandler(e); }}
                    dataList={dataList}
                />
                <label htmlFor="trackFile" className="song-upload-tab__file-button">
                    <input
                        className="song-upload-tab__file-input"
                        type="file"
                        id="trackFile"
                        onChange={(e) => { fileLoadHandler(e); }}
                    />
                    <span className="song-upload-tab__file-button-text">Выбрать трек</span>
                </label>
                <label htmlFor="trackImgFile" className="song-upload-tab__file-button">
                    <input
                        className="song-upload-tab__file-input"
                        type="file"
                        id="trackImgFile"
                        onChange={(e) => { fileLoadHandler(e); }}
                    />
                    <span className="song-upload-tab__file-button-text">Выбрать изображение</span>
                </label>
                <Button
                    buttonStyle="primary"
                    buttonType="button"
                    onClick={() => {
                        submitHandler();
                        modalClose();
                    }}
                > Сохранить трек</Button>
            </div>
        </div>
    );
};

TrackLoadTab.propTypes = {
    playlistId: PropTypes.number,
    modalClose: PropTypes.func.isRequired,
    updateData: PropTypes.func
};

TrackLoadTab.defaultProps = {
    playlistId: 0,
    updateData: () => 1
};
