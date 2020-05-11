import { queryCreator } from 'shared/utils/axiosSettings';

const songsAdapter = (songs) => {
  return songs && songs.map((track) => ({
    uniqueId: track.id,
    trackName: track.name,
    authorName: track.author && track.author.name,
    albumImgUrl: track.image,
    trackUrl: track.file
  }));
};

export const tracks = {
  getTracks: () => queryCreator.get('/songs')
    .then(({ data }) => {
      return songsAdapter(data);})
};
