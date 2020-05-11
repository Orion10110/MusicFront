import { queryCreator } from './axiosSettings';

const getRandomID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

export { queryCreator, getRandomID };
