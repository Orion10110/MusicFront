import { queryCreator } from 'shared/utils/axiosSettings';


export const newPlaylistService = {
  getNewPlaylisId: () => queryCreator.post('/playlists')
    .then(response => (response.data.id))
};
