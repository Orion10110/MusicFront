import axios from 'axios';
import {
  isTokenExpired,
  getRefreshToken,
  setToken,
  getToken
} from 'modules/authentication/services/jwt';

const BASE_URL = 'http://127.0.0.1:3333/api';

const notCheckForTokens = ['/register', '/login'];

const queryCreator = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

const createConfigWithToken = (config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${getToken()}`
    }
  };
};

const newRefreshQuery = async (config) => {
  const { data: { token } } = await axios.post(`${BASE_URL}/refresh`, {
    refreshToken: getRefreshToken()
  });
  setToken(token);
  return createConfigWithToken(config);
};

queryCreator.interceptors.request.use(
  config => {
    if (notCheckForTokens.some(item => item.includes(config.url))) {
      return config;
    }
    if (!getToken() || isTokenExpired()) {
      return newRefreshQuery(config);
    }
    return createConfigWithToken(config);
  },
  error => {
    return Promise.reject(error);
  }
);

export { queryCreator };
