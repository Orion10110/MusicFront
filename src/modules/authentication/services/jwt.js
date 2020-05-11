import jwtDecode from 'jwt-decode';

const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';

function parseJwt(token) {

  try {
    return jwtDecode(token);
  }
  catch (Error) {
    return null;
  }
}

export function setToken(JWT) {

  const { token, refreshToken } = JWT;
  sessionStorage.setItem(ACCESS_TOKEN, token);
  localStorage.setItem(REFRESH_TOKEN, refreshToken);

}

export function getToken() {
  return sessionStorage.getItem(ACCESS_TOKEN);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN);
}

export function getIssuedTime() {

  const { iat } = parseJwt(getToken());
  return iat;
}

export function getExpiresTime() {

  const { exp } = parseJwt(getToken());
  return exp;
}

export function isTokenExpired() {
  const expiresTime = getExpiresTime();
  if (!expiresTime) return true;
  const currentTimeStampInSeconds = (new Date().getTime()) / 1000;

  return expiresTime < currentTimeStampInSeconds;
}
