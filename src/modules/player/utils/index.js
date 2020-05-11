const getSecondsToSecondAndMinutes = meta => `${Math.floor(meta / 60)}:${Math.floor(meta % 60)}`;

const getWidth = ({ current: { currentTime, duration } }) => `${(currentTime / duration) * 100}%`;

const isRefExist = ref => ref && ref.current;

const shuffle = (arr) => {
    const array = arr;
    let j;
    let temp;
    for (let i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    return array;
};

const getNextId = (trackId, trackList) => (trackId < trackList.length - 1) ? (trackId + 1) : 0;

const getPrevId = (trackId, trackList) => (trackId > 0) ? (trackId - 1) : (trackList.length - 1);

const getSongData = ({ id, trackId, paused }) => ({ id, trackId, paused });

export { isRefExist, getWidth, getSecondsToSecondAndMinutes, shuffle, getNextId, getPrevId, getSongData };
