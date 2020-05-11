import { queryCreator } from 'shared/utils/axiosSettings';

const songsAdapter = songs => {
  return songs && songs.map((track) => ({
    uniqueId: track.id,
    trackName: track.name,
    authorName: track.author && track.author.name,
    albumImgUrl: track.image,
    trackUrl: track.file
  }));
};

export const playlistService = {
  getUserPlaylists: () => queryCreator.get('/playlists')
    .then(response => response.data.map(playlist => {
      return {
        ...playlist,
        songs: songsAdapter(playlist.songs)
      };
    })),

  getPlaylistById: id => queryCreator.get(`/playlists/${id}`)
    .then(({ data: playlist }) => ({
      ...playlist,
      songs: songsAdapter(playlist.songs)
    }))
};
