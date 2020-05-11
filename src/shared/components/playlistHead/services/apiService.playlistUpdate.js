import { queryCreator } from 'shared/utils';

const authorsAdapter = (data) => {
    const authors = [];
    data.forEach(element => {
        authors.push(element.name);
    });
    return authors;
};

export const playlistUpdateApi = {

    imgUpload: (imgInfo) => queryCreator.patch('/playlists/image', imgInfo),

    titleUpdate: (titleInfo) => queryCreator.put(`/playlists/${titleInfo.id}`, { title: titleInfo.title }),

    delete: (playlistId) => queryCreator.delete(`/playlists/${playlistId}`),

    getAuthorsList: () => queryCreator.get('/authors')
        .then(({ data }) => authorsAdapter(data)),

    uploadTrack: (trackInfo) => queryCreator.post('/songs', trackInfo),

    addTrack: (trackInfo) => queryCreator.patch(`/playlists/${trackInfo.playlistId}/song`, { id: trackInfo.trackId }),

    removeTrack: (trackInfo) => queryCreator.delete(`/playlists/${trackInfo.playlistId}/song/${trackInfo.trackId}`),

    deleteTrack: (trackId) => queryCreator.delete(`/songs/${trackId}`)
};
